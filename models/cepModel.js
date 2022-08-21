const connection = require('./connection')

const getByCep = async (cep) => {
  try {
    const [result] = await connection
      .execute('SELECT * FROM ceps WHERE cep = ? ', [cep])
    return result
  } catch (error) {
    console.log(error.message);
    return { error }
  }
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const dados = [cep, logradouro, bairro, localidade, uf];
  try {
    const [result] = await connection
      .execute('INSERT INTO ceps VALUES(?,?,?,?,?)', dados)
    return result
  } catch (error) {
    console.log(error.message);
    return { error }
  }
}

module.exports = {
  getByCep,
  create
}