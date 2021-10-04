import express from "express"
import adminAuthController from "../controller/admin.auth.controller"
import authUserMiddleware from "../middleware/auth.user.middleware"

export default express
  .Router()
  .post("/signin", adminAuthController.signin)
  .get("/access", authUserMiddleware, adminAuthController.access)
