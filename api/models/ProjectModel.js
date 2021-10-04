import { query } from "../db/database"
const { multipleColumnSet } = require("../helper/common.helper")

class ProjetModel {
  constructor() {
    this.tableName = "projects"
  }

  async find(params = {}) {
    let sql = `SELECT * FROM ${this.tableName} ORDER BY post_at DESC`

    if (!Object.keys(params).length) {
      return await query(sql)
    }

    const { columnSet, values } = multipleColumnSet(params)
    sql += ` WHERE ${columnSet}`

    return await query(sql, [...values])
  }

  async findLimit(limit) {
    const sql = `SELECT * FROM ${this.tableName} ORDER BY post_at DESC LIMIT ?`

    return await query(sql, limit)
  }

  async findOne(params) {
    const { columnSet, values } = multipleColumnSet(params)

    const sql = `SELECT * FROM ${this.tableName} WHERE ${columnSet}`

    const result = await query(sql, [...values])

    return result[0]
  }

  async create({ name, description, link, image }) {
    const sql = `INSERT INTO ${this.tableName} (name, description, link, image, post_at) VALUES (?,?,?,?, NOW())`

    const result = await query(sql, [name, description, link, image])
    const affectedRows = result ? result.affectedRows : 0

    return affectedRows
  }

  async update(params, id) {
    const { columnSet, values } = multipleColumnSet(params)

    const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id=?`
    const result = await query(sql, [...values, id])

    return result
  }

  async delete(id) {
    const sql = `DELETE FROM ${this.tableName} WHERE id=?`

    const result = await query(sql, [id])

    return result
  }
}

export default new ProjetModel()
