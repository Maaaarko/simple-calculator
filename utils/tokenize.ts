import { isOperator, isNumber } from "./helpers"

function tokenize(expression: string): string[] {
    const tokens: string[] = []
    let currentToken = ""

    let openParenthesis = 0

    for (let i = 0; i < expression.length; i++) {
        const currentChar = expression[i]
        const nextChar = expression[i + 1] || ""
        const prevChar = expression[i - 1] || ""

        if (
            (isNumber(currentChar) && nextChar == "(") ||
            (currentChar == ")" && nextChar == "(")
        ) {
            expression =
                expression.slice(0, i + 1) + "×" + expression.slice(i + 1)
        }
    }

    for (let i = 0; i < expression.length; i++) {
        const currentChar = expression[i]
        const nextChar = expression[i + 1] || ""
        const prevChar = expression[i - 1] || ""

        if (currentChar === "(") {
            openParenthesis++
        } else if (currentChar === ")") {
            openParenthesis--
        }

        if (openParenthesis < 0) {
            throw new SyntaxError("Parenthesis not opened.")
        }

        if (isNumber(currentChar)) {
            if (
                isOperator(prevChar) ||
                isNumber(prevChar) ||
                prevChar === "" ||
                prevChar === "," ||
                prevChar === "("
            ) {
                currentToken += currentChar
            } else if (prevChar === ")") {
                throw new SyntaxError(
                    "Error at character " + i + ": " + "Invalid syntax."
                )
            } else {
                console.log("OVO?", currentChar, prevChar)
                throw new SyntaxError(
                    "Error at character " + i + ": " + "Unknown error."
                )
            }
        } else if (isOperator(currentChar)) {
            if (isNumber(prevChar)) {
                tokens.push(currentToken)
            }
            currentToken = currentChar
            tokens.push(currentToken)
            currentToken = ""
        } else if (currentChar === "(" || currentChar === ")") {
            currentToken && tokens.push(currentToken)
            currentToken = currentChar
            tokens.push(currentToken)
            currentToken = ""
        } else if (currentChar === ",") {
            if (currentToken.includes(",")) {
                throw new SyntaxError(
                    "Error at character " + i + ": " + "Invalid syntax."
                )
            }
            if (isNumber(prevChar) && isNumber(nextChar)) {
                currentToken += currentChar
            } else {
                throw new SyntaxError(
                    "Error at character " + i + ": " + "Invalid syntax."
                )
            }
        }

        if (isNumber(currentChar) && i === expression.length - 1) {
            tokens.push(currentToken)
            break
        }
    }

    if (openParenthesis > 0) {
        throw new SyntaxError("Error: Parenthesis not closed.")
    }

    return sanitizeTokens(tokens)
}

function sanitizeTokens(tokens: string[]): string[] {
    const sanitized: string[] = []
    let charCounter = 0
    let i = 0
    let openBrackets = 0
    let sign = 1

    for (let idx = 0; idx < tokens.length; idx++) {
        if (idx == 0) {
            sanitized.push("1")
            i = sanitized.push("×")
        }

        let write = true

        if (isOperator(tokens[idx])) {
            switch (tokens[idx]) {
                case "+":
                    switch (sanitized[i - 1]) {
                        case "+":
                            write = false
                            break
                        case "-":
                            write = false
                            break
                        case "×":
                            write = false
                            break
                        case "/":
                            write = false
                            break
                        case "(":
                            write = false
                            break
                    }
                    break
                case "-":
                    switch (sanitized[i - 1]) {
                        case "+":
                            sanitized[i - 1] = "-"
                            write = false
                            break
                        case "-":
                            sanitized[i - 1] = "+"
                            write = false
                            break
                        case "×":
                        case "/":
                        case "(":
                        case "":
                            sign *= -1
                            write = false
                            break
                    }
                    break
                case "×":
                case "/":
                case "":
                    if ("/×-+(".includes(sanitized[i - 1])) {
                        throw new SyntaxError(
                            "Error at character " +
                                charCounter +
                                ": " +
                                "Invalid syntax."
                        )
                    }
                    break
            }
        }

        if (write) {
            i = sanitized.push(tokens[idx])
            if (tokens[idx] == "(") openBrackets++
            if (tokens[idx] == ")") openBrackets--
            if (sign === -1) {
                let arr = tokens.slice(idx, tokens.length)
                let bracketCounter = 0
                arr.every((el, j) => {
                    if (el === "(") {
                        bracketCounter++
                    } else if (el === ")") {
                        bracketCounter--
                    }

                    if (bracketCounter === 0) {
                        tokens.splice(idx + j + 1, 0, "×", "-1")
                        return false
                    }

                    return true
                })

                sign = 1
            }
        }

        charCounter += tokens[idx].length
    }
    return sanitized
}

export default tokenize
