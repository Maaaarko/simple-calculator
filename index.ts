import express from "express"
import cors from "cors"
import { evaluateExpression } from "./controllers/evaluateController"

const app = express()
const port = 5000

const allowedOrigins = ["http://localhost:3000"]

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}

app.use(cors(options))
app.use(express.json())

app.get("/api/evaluate", (req, res) => {
    evaluateExpression(req, res)
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
