const statusCode = [200, 400,404, 500]
const cepService = require('../services/cepServices')
const getByCep = async (req, res) => {
  const { cep } = req.params
  const CEP = await cepService.getByCep(cep)
  if (!CEP) {
    return res.status(statusCode[2]).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
  }
  return res.status(statusCode[0]).json(CEP)
}


module.exports = {
  getByCep
}