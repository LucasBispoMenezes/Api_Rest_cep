const connection = require('./connection')

const getByCep = async (cep) => {
  try {
    const [result] = await connection
      .execute('SELECT * FROM ceps WHERE cep = ? ', [cep])
    return result
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getByCep
}