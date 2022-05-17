import { tokenize } from "../utils"

describe("testing tokenize", () => {
    it("should tokenize a math expression", () => {
        const tokens1 = tokenize("1,3+2")
        expect(tokens1).toEqual(["1", "×", "1,3", "+", "2"])

        const tokens2 = tokenize("1-(7+3)")
        expect(tokens2).toEqual(["1", "×", "1", "-", "(", "7", "+", "3", ")"])

        const tokens3 = tokenize("43×3/(11-2)")
        expect(tokens3).toEqual([
            "1",
            "×",
            "43",
            "×",
            "3",
            "/",
            "(",
            "11",
            "-",
            "2",
            ")",
        ])

        const tokens4 = tokenize("1++2")
        expect(tokens4).toEqual(["1", "×", "1", "+", "2"])

        const tokens5 = tokenize("1++++2")
        expect(tokens5).toEqual(["1", "×", "1", "+", "2"])

        const tokens6 = tokenize("1+-+--2")
        expect(tokens6).toEqual(["1", "×", "1", "-", "2"])

        const tokens7 = tokenize("1×+2")
        expect(tokens7).toEqual(["1", "×", "1", "×", "2"])

        const tokens8 = tokenize("1×-2")
        expect(tokens8).toEqual(["1", "×", "1", "×", "2", "×", "-1"])

        const tokens9 = tokenize("1×-+2")
        expect(tokens9).toEqual(["1", "×", "1", "×", "2", "×", "-1"])

        const tokens10 = tokenize("1×-(2-1)")
        expect(tokens10).toEqual([
            "1",
            "×",
            "1",
            "×",
            "(",
            "2",
            "-",
            "1",
            ")",
            "×",
            "-1",
        ])

        const tokens11 = tokenize("")
    })

    it("should throw en error when parenthesis aren't closed", () => {
        expect(() => tokenize("1+2×(3+4")).toThrowError(
            "Parenthesis not closed."
        )
    })

    it("should throw an error when parenthesis are not opened, but only closed", () => {
        expect(() => tokenize("1+2×3)")).toThrowError("Parenthesis not opened.")
    })

    it("should throw an error when number is input right after closed parenthesis", () => {
        expect(() => tokenize("(1+3)4")).toThrowError(
            "Error at character 5: Invalid syntax."
        )
    })

    it("should throw an error when decimal separator (,) is used in the wrong place", () => {
        expect(() => tokenize("1+,3")).toThrowError(
            "Error at character 2: Invalid syntax."
        )
        expect(() => tokenize("1+3,")).toThrowError(
            "Error at character 3: Invalid syntax."
        )
        expect(() => tokenize("1+3,4,5")).toThrowError(
            "Error at character 5: Invalid syntax."
        )
    })

    it("should throw an error if operators are used illegally", () => {
        expect(() => tokenize("1××2")).toThrowError(
            "Error at character 2: Invalid syntax."
        )
        expect(() => tokenize("1×/3")).toThrowError(
            "Error at character 2: Invalid syntax."
        )
        expect(() => tokenize("(×2+1)")).toThrowError(
            "Error at character 1: Invalid syntax."
        )
        expect(() => tokenize("2-/2")).toThrowError(
            "Error at character 2: Invalid syntax."
        )
    })
})
