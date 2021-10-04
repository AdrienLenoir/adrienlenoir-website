import UserModel from "../models/UserModel"

export default (req, res, next) => {
  let userIsLogged = false

  if ((req.cookies && req.cookies.token) || req.headers.authorization) {
    const token = req.cookies.token ?? req.headers.authorization
    const logged = UserModel.isLogged(token)

    if (logged) {
      userIsLogged = true
    }
  }

  if (!userIsLogged) {
    return res.json({
      logged: false,
      success: false,
      error: "error.not_connected",
    })
  }

  next()
}
