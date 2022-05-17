import { isOperator } from "./helpers"

type OperatorPrecedence = {
    [key: string]: number
}

const precedences: OperatorPrecedence = {
    "×": 2,
    "/": 2,
    "+": 1,
    "-": 1,
}

/**
 * Converts tokens in infix notation to postfix notation (aka RPN - Reverse Polish Notation) using Dijkstra's Shunting-yard algorithm
 *
 * @param tokens - cleaned array of tokens in infix notation
 * @returns array of tokens in postfix notation
 */
function infixToPostfix(tokens: string[]): string[] {
    const postfix: string[] = []
    const stack: string[] = []

    for (const token of tokens) {
        if (isOperator(token)) {
            while (
                stack.length > 0 &&
                isOperator(stack[stack.length - 1]) &&
                precedences[token] <= precedences[stack[stack.length - 1]]
            ) {
                postfix.push(stack.pop()!)
            }
            stack.push(token)
        } else if (token === "(") {
            stack.push(token)
        } else if (token === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                postfix.push(stack.pop()!)
            }
            stack.pop()
        } else {
            postfix.push(token)
        }
    }

    while (stack.length > 0) {
        postfix.push(stack.pop()!)
    }

    return postfix
}

export default infixToPostfix
