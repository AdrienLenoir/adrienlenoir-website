import fs from "fs"
import path from "path"
import crypto from "crypto"
import formidable from "formidable"
import ProjectModel from "../models/ProjectModel"
const uploadPath = path.join(__dirname, "../upload/", "")

export default {
  getAll: async (req, res) => {
    const projects = await ProjectModel.find()

    return res.json({
      success: true,
      projects,
    })
  },
  getLast: async (req, res) => {
    const projects = await ProjectModel.findLimit(7)

    return res.json({
      projects,
    })
  },
  getOne: async (req, res) => {
    const projectId = req.params.project_id

    if (isNaN(parseInt(projectId))) {
      return res.json({
        success: false,
        error: "error.params.must_by_a_number",
      })
    }

    const project = await ProjectModel.findOne({ id: projectId })

    if (!project) {
      return res.json({
        success: false,
        error: "error.project_not_found",
      })
    }

    return res.json({
      success: true,
      project,
    })
  },
  create: (req, res) => {
    const form = new formidable.IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.json({
          success: false,
          message: "Une erreur est survenue",
        })
      }

      if (
        fields.name == null ||
        fields.description == null ||
        fields.link == null ||
        files.background == null
      )
        return res.json({
          success: false,
          message: "Formulaire incomplet",
        })

      const oldpath = files.background.path
      const fileExt = path.extname(files.background.name)
      const fileNewName = crypto.randomBytes(15).toString("hex") + fileExt
      const newpath = uploadPath + fileNewName

      fs.rename(oldpath, newpath, async (err) => {
        if (err)
          return res.json({
            success: false,
            message: "Une erreur est survenue avec le fichier",
          })

        const project = await ProjectModel.create({
          name: fields.name,
          description: fields.description,
          link: fields.link,
          image: fileNewName,
        })

        return res.json({
          success: true,
          project,
        })
      })
    })
  },
  update: (req, res) => {
    const form = new formidable.IncomingForm()
    const uploadPath = path.join(__dirname, "../upload/", "")

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.json({
          success: false,
          message: "Une erreur est survenue",
        })
      }
      if (
        fields.name == null ||
        fields.description == null ||
        fields.link == null
      )
        return res.json({
          success: false,
          message: "Formulaire incomplet",
        })

      if (files.background != null) {
        const oldpath = files.background.path
        const fileExt = path.extname(files.background.name)
        const fileNewName = crypto.randomBytes(15).toString("hex") + fileExt
        const newpath = uploadPath + fileNewName
        const currentProject = await ProjectModel.findOne({
          id: req.params.project_id,
        })

        fs.unlink(path + currentProject.background, () => {})

        fs.rename(oldpath, newpath, async (err) => {
          if (err)
            return res.json({
              success: false,
              message: "Une erreur est survenue avec le fichier",
            })

          const project = await ProjectModel.update(
            {
              name: fields.name,
              description: fields.description,
              link: fields.link,
              image: fileNewName,
            },
            req.params.project_id
          )

          return res.json({
            success: true,
            updated: project.affectedRows !== 0,
          })
        })
      } else {
        const project = await ProjectModel.update(
          {
            name: fields.name,
            description: fields.description,
            link: fields.link,
          },
          req.params.project_id
        )

        return res.json({
          success: true,
          updated: project.affectedRows !== 0,
        })
      }
    })
  },
  delete: async (req, res) => {
    const projectId = req.params.project_id

    if (isNaN(parseInt(projectId))) {
      return res.json({
        success: false,
        error: "error.params.must_by_a_number",
      })
    }
    const category = await ProjectModel.findOne({ id: projectId })

    if (!category) {
      return res.json({
        success: false,
        error: "error.project_not_found",
      })
    }

    await ProjectModel.delete(projectId)

    return res.json({
      success: true,
    })
  },
}
