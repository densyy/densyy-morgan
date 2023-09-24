/* ---- Methods ---- */

function densyyMorgan (req, res, next) {
  const { hostname, method, path, ip, protocol } = req
  const { statusCode } = res
  const date = new Date().toUTCString()

  console.info(`ACCESS: ${date} - ${method} ${protocol}://${hostname}${path} ${statusCode} - ${ip}`)
  next()
}

module.exports = { densyyMorgan }
