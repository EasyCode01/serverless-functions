// domain/.netlify/functions/1-hello
exports.handler = async () => {
  return {
    statusCode: 201,
    body: 'Hello, This is my first netlify serveless function',
  }
}
