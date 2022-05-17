function isOperator(char: string): boolean {
    return ["+", "-", "×", "/"].includes(char)
}

function isNumber(char: string): boolean {
    return char >= "0" && char <= "9"
}

export { isOperator, isNumber }
