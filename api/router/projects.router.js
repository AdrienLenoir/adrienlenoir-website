import express from "express"
import projectController from "../controller/projects.controller"

export default express
  .Router()
  .get("/all", projectController.getAll)
  .get("/last", projectController.getLast)
  .get("/:project_id", projectController.getOne)
