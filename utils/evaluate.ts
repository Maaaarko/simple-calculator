import { tokenize, infixToPostfix, evaluatePostfix } from "../utils"

function evaluate(expression: string): number {
    const tokens = tokenize(expression)
    const postfix = infixToPostfix(tokens)

    return evaluatePostfix(postfix)
}

export default evaluate
