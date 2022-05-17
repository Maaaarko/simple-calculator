import { evaluatePostfix } from "../utils"

describe("testing evaluate", () => {
    it("should evaluate a postfix expression", () => {
        const pf1 = evaluatePostfix(["1", "2", "+"])
        expect(pf1).toEqual(3)

        const pf2 = evaluatePostfix(["1", "7", "3", "+", "-"])
        expect(pf2).toEqual(-9)

        const pf3 = evaluatePostfix(["43", "3", "×", "11", "2", "-", "/"])
        expect(pf3).toBeCloseTo(14.33)

        const pf4 = evaluatePostfix(["12", "3", "×", "-4", "×"])
        expect(pf4).toEqual(-144)

        const pf5 = evaluatePostfix(["1,2", "1,1", "+"])
        expect(pf5).toEqual(2.3)
    })

    it("should throw an error if the postfix expression is invalid", () => {
        expect(() => evaluatePostfix(["1", "2", "+", "+"])).toThrowError(
            "Error: Invalid number of operators."
        )

        expect(() => evaluatePostfix(["1", "2"])).toThrowError(
            "Error: Invalid number of operators."
        )
    })
})
