import { tokenize, infixToPostfix, evaluatePostfix } from "../utils"

/**
 * Evaluates raw math expression
 *
 * @param expression - expression to be evaluated
 * @returns result of the expression
 */
function evaluate(expression: string): number {
    const tokens = tokenize(expression)
    const postfix = infixToPostfix(tokens)

    return evaluatePostfix(postfix)
}

export default evaluate
