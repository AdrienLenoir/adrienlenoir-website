import path from "path"
import express from "express"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import apiRouter from "./api.router"
import corsOriginMiddleware from "./middleware/cors.origin.middleware.js"

const app = express()
const envPath = path.resolve(process.cwd() + "/api", ".env")

require("dotenv").config({ path: envPath })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan("combined"))
app.use("/upload", express.static(path.join(__dirname, "upload")))
app.use(apiRouter)
app.use(corsOriginMiddleware)

export default app
