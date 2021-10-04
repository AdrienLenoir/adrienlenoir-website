exports.multipleColumnSet = (object) => {
  if (typeof object !== "object") {
    throw new TypeError("Invalid input")
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  const columnSet = keys.map((key) => `${key} = ?`).join(", ")

  return {
    columnSet,
    values,
  }
}

exports.multipleColumnSetWhere = (object) => {
  if (typeof object !== "object") {
    throw new TypeError("Invalid input")
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  const columnSet = keys.map((key) => `${key} = ?`).join(" AND ")

  return {
    columnSet,
    values,
  }
}

exports.validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email)
}

exports.isAlphaNumeric = (str) => {
  return /^[A-Za-z0-9]+$/.test(str)
}
