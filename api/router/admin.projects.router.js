import express from "express"
import projectController from "../controller/projects.controller"
import authUserMiddleware from "../middleware/auth.user.middleware"

export default express
  .Router()
  .post("/", authUserMiddleware, projectController.create)
  .delete("/:project_id", authUserMiddleware, projectController.delete)
  .patch("/:project_id", authUserMiddleware, projectController.update)
