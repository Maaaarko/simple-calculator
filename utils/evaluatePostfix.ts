import { isOperator } from "./helpers"

/**
 * Evaluates the postfix expression
 *
 * @param postfix - array of tokens in postfix notation
 * @returns numerical result of the expression
 */
function evaluatePostfix(postfix: string[]): number {
    const stack: number[] = []

    for (const token of postfix) {
        if (isOperator(token)) {
            const b = stack.pop()!
            const a = stack.pop()!

            switch (token) {
                case "+":
                    stack.push(a + b)
                    break
                case "-":
                    stack.push(a - b)
                    break
                case "×":
                    stack.push(a * b)
                    break
                case "/":
                    stack.push(a / b)
                    break
            }
        } else {
            stack.push(parseFloat(token.replace(",", ".")))
        }
    }

    if (isNaN(stack[0]) || stack.length > 1) {
        throw new SyntaxError("Error: Invalid number of operators.")
    }

    return stack[0]
}

export default evaluatePostfix
