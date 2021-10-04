import express from "express"
import projectsController from "./router/projects.router"
import adminAuthController from "./router/admin.auth.router"
import adminProjectController from "./router/admin.projects.router"

export default express
  .Router()
  .use("/projects", projectsController)
  .use("/admin/auth", adminAuthController)
  .use("/admin/projects", adminProjectController)
