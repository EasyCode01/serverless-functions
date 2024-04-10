const items = require('../assets/data')

exports.handler = async () => {
  return {
    headers: {
      'Acess-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
