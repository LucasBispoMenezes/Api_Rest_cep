require('dotenv').config()

const express = require('express')
const app = express();
const CepRoutes = require('./routes/cepRouter')
const bodyParser = require('body-parser')

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/cep', CepRoutes)

app.listen(PORT, () => console.log(`estou aqui ${PORT}`))