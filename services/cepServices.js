const cepModel = require('../models/cepModel')
const axios = require('axios').default

const serialize = ({ cep, logradouro, bairro, localidade, uf }) => {
  const str = cep.substring(0, 5)
  try {
    return {
      cep: str.concat('-') + cep.substring(5, 8),
      logradouro,
      bairro,
      localidade,
      uf
    }

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

const RequestApiExternal = async (cep) => {
  try {
    const api = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const { data } = api
    await create(data)
    const { erro } = api
    if (erro) {
      return false
    }
    return {
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,

    }
  } catch (error) {
    console.log(error.message);
  }
}

const getByCep = async (cep) => {
  const dataCep = await cepModel.getByCep(cep)
  if (dataCep.length === 0) {
    return await RequestApiExternal(cep)
  }
  return serialize(dataCep[0]);
}
const create = async (obj) => {
  try {
    const out = serializeForSendDB(obj)
    if (out) return false
    const dataCep = await cepModel.create(out)
    return dataCep
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getByCep,
  create
}