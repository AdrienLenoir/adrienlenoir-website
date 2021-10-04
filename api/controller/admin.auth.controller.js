import UserModel from "../models/UserModel"

export default {
  signin: async (req, res) => {
    if (
      req.body.password == null ||
      req.body.password === "" ||
      req.body.a2f_code == null ||
      req.body.a2f_code === ""
    )
      return res.json({
        success: false,
        error: "Formulaire incomplet !",
      })

    const login = await UserModel.login(req.body.password, req.body.a2f_code)

    if (login.success) {
      return res.json({
        success: true,
        token: login.token,
      })
    } else {
      return res.json({
        success: false,
        error: login.message,
      })
    }
  },
  access: (req, res) => {
    const authorization = req.cookies.token ?? req.headers.authorization
    const logged = UserModel.isLogged(authorization)

    return res.json({
      logged: logged && authorization !== undefined,
    })
  },
}
