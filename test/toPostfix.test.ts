import { toPostfix } from "../utils"

describe("testing toPostfix", () => {
    it("should convert tokens to postfix notation", () => {
        const pf1 = toPostfix(["1", "×", "1", "+", "2"])
        expect(pf1).toEqual(["1", "1", "×", "2", "+"])

        const pf2 = toPostfix(["1", "×", "1", "-", "(", "7", "+", "3", ")"])
        expect(pf2).toEqual(["1", "1", "×", "7", "3", "+", "-"])

        const pf3 = toPostfix([
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
        expect(pf3).toEqual(["1", "43", "×", "3", "×", "11", "2", "-", "/"])

        const pf4 = toPostfix(["1", "×", "12", "×", "3", "×", "-1", "×", "4"])
        expect(pf4).toEqual(["1", "12", "×", "3", "×", "-1", "×", "4", "×"])
    })
})
