require('dotenv').config()

const express = require('express')
const app = express();
const CepRoutes = require('./routes/cepRouter')

const PORT = process.env.PORT

app.use(express.json())
app.use('/cep', CepRoutes)

app.listen(PORT, () => console.log(`estou aqui ${PORT}`))