import { isOperator } from "./helpers"

type OperatorPrecedence = {
    [key: string]: number
}

const precedences: OperatorPrecedence = {
    "×": 3,
    "/": 3,
    "+": 2,
    "-": 2,
}

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
