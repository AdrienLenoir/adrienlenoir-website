export default (req, res, next) => {
  const origin = req.headers.origin

  if (process.env.ALLOWED_CORS_ORIGIN.split(",").includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-xsrf-token"
  )
  res.setHeader("Access-Control-Allow-Credentials", "true")
  next()
}
