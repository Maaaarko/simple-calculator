import express, { Express, Request, Response } from "express"
import cors from "cors"
import { evaluate } from "./utils"

const app: Express = express()
const port = 5000

const allowedOrigins = ["http://localhost:3000"]

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}

app.use(cors(options))
app.use(express.json())

app.get(
    "/api/evaluate",
    async (
        req: Request<any, any, { expression: string }, any>,
        res: Response
    ) => {
        try {
            // + symbol is being sent as "%2B" so we have to decode it
            const expression: string = req.query.expression.replaceAll(
                "%2B",
                "+"
            )

            const result = evaluate(expression)

            res.status(201).json({ success: true, result })
        } catch (err: any) {
            res.status(500).json({ success: false, result: err.message })
        }
    }
)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
