// @desc log all the Api Calls

module.exports = logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocal}: ${req.get('host')}${req.originalUrl}`
  )
  next()
}
