const BAD_REQUEST = 400

const validateCep = (req, res, next) => {
  const { cep } = req.params
  const rgx = /^\d{5}-?\d{3}$/
  if (!rgx.test(cep)) {
    return res.status(BAD_REQUEST).json({ "error": { "code": "invalidData", "message": "CEP inválido" } })
  }
  next()
}

module.exports = {
  validateCep
}