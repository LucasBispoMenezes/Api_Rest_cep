const cepModel = require('../models/cepModel')

const serialize = ({ cep, logradouro, bairro, localidade, uf }) => {
  const str = cep.substring(0, 5)
  try {
    return [{
      cep: str.concat('-') + cep.substring(5, 8),
      logradouro,
      bairro,
      localidade,
      uf
    }]

  } catch (error) {
    console.log(error.message);
  }
}
const serializeForSendDB = ({ cep, logradouro, bairro, localidade, uf }) => {
  try {
    return {
      cep: cep.replace('-', ''),
      logradouro,
      bairro,
      localidade,
      uf
    }
  } catch (error) {
    console.log(error.message);
  }
}

const getByCep = async (cep) => {
  const dataCep = await cepModel.getByCep(cep)
  if (dataCep.length === 0) {
    return false
  }
  return serialize(dataCep[0]);
}
const create = async (obj) => {
  const out = serializeForSendDB(obj)
  const dataCep = await cepModel.create(out)
  return dataCep
}

module.exports = {
  getByCep,
  create
}