const statusCode = [200, 400, 404, 500]
const cepService = require('../services/cepServices')

const getByCep = async (req, res) => {
  const { cep } = req.params
  try {
    const CEP = await cepService.getByCep(cep)
    if (!CEP) {
      return res.status(statusCode[2]).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
    }
    return res.status(statusCode[0]).json(CEP)

  } catch (error) {
    console.log(error.message);
  }
}

const create = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body
  try {
    const message = await cepService.create({ cep, logradouro, bairro, localidade, uf })
    if (message.affectedRows != 0) return res.status(201).json(req.body)
    return res.status(201).json({ message: "deu merda" })
  } catch (error) {
    console.log(error.message);

  }
}

module.exports = {
  getByCep,
  create
}