import bcrypt from "bcrypt"
import speakeasy from "speakeasy"
import jwtUtils from "../helper/jwt.helper"

const OTP_SECRET_KEY = process.env.OTP_SECRET_KEY
const HASHED_PASSWORD = process.env.HASHED_PASSWORD

class ProjetModel {
  login(password, A2FCode) {
    return new Promise(function (resolve) {
      bcrypt.compare(password, HASHED_PASSWORD, (err, isEgal) => {
        if (err) {
          return resolve({
            success: false,
            message: "Erreur 500",
          })
        }

        if (isEgal) {
          const otpVerify = speakeasy.totp.verify({
            secret: OTP_SECRET_KEY,
            encoding: "base32",
            token: A2FCode,
          })

          if (!otpVerify) {
            return resolve({
              success: false,
              message: "Mauvais code !",
            })
          }

          return resolve({
            success: true,
            token: jwtUtils.genereteUserToken(),
          })
        } else {
          return resolve({
            success: false,
            message: "Mauvais mot de passe !",
          })
        }
      })
    })
  }

  async isLogged(authorization) {
    return await jwtUtils.verify(authorization)
  }
}

export default new ProjetModel()
