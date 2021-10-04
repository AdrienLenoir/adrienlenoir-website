const jwt = require("jsonwebtoken")
const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET

module.exports = {
  genereteUserToken: (userId, remember) => {
    const token = jwt.sign(
      {
        id: userId,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "24h",
      }
    )

    return token
  },

  parseAuthorization: (authorization) => {
    return authorization != null ? authorization.replace("Bearer ", "") : null
  },

  verify: (authorization) => {
    const token = module.exports.parseAuthorization(authorization)

    if (token != null) {
      try {
        const jwtToken = jwt.verify(token, JWT_SIGN_SECRET)

        return jwtToken != null && jwtToken.id != null
      } catch (error) {}
    }

    return false
  },
}
