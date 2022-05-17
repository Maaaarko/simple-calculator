import { Request, Response } from "express"
import { evaluate } from "../utils"

/**
 * GET request that receives math expression as query parameter
 * and sends the evaluated result back to the client
 *
 * @param req - Express request object
 * @param res - Express response object
 */
async function evaluateExpression(
    req: Request<any, any, { expression: string }, any>,
    res: Response
) {
    try {
        // + symbol is being sent as "%2B" so we have to decode it
        const expression: string = req.query.expression.replaceAll("%2B", "+")

        const result = evaluate(expression)

        res.status(201).json({ success: true, result })
    } catch (err: any) {
        res.status(500).json({ success: false, result: err.message })
    }
}

export { evaluateExpression }
