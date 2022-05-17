import { evaluate } from "../utils"

describe("testing full functionality (from input to output)", () => {
    it("should evaluate a math expression", () => {
        const result1 = evaluate("1,3+2")
        expect(result1).toEqual(3.3)

        const result2 = evaluate("1-(7+3)")
        expect(result2).toEqual(-9)

        const result3 = evaluate("43×3/(11-2)")
        expect(result3).toBeCloseTo(14.33)

        const result4 = evaluate("85/946+--(-564)×+56")
        expect(result4).toBeCloseTo(-31583.91)

        const result5 = evaluate("9/6×6/+--+9×+97")
        expect(result5).toEqual(97)

        const result6 = evaluate("12--+(47-+-+--98)×-++-8")
        expect(result6).toEqual(1172)

        const result7 = evaluate("75/-+-+-+9-+-5/+87-+63×+4")
        expect(result7).toBeCloseTo(-260.28)

        const result8 = evaluate("8×-+-+(-+8)×-+-(+--+8×--+9)/--+-8")
        expect(result8).toEqual(576)

        const result9 = evaluate("2-(3×-(3×-2×(2-3×(1+1))))")
        expect(result9).toEqual(74)

        const result10 = evaluate("5/-(3+5)")
        expect(result10).toEqual(-0.625)

        const result11 = evaluate("-4×6")
        expect(result11).toEqual(-24)

        const result12 = evaluate("((-4)×-+-(-4+3×(-+-2))×555×-+--1×(-6))")
        expect(result12).toEqual(-26640)

        const result13 = evaluate(
            "-4569+35×-----+1313+---5667/-(123-123-123×999-999)"
        )
        expect(result13).toBeCloseTo(-50524.04575)

        const result14 = evaluate("1,9898×-+--5×5,55555+87/---+----7,78")
        expect(result14).toBeCloseTo(-66.45468623)

        const result15 = evaluate(
            "0,789/+--+---4+(-0,45/---65,40×(-989+78/-(-+-45)))"
        )
        expect(result15).toBeCloseTo(-7.014222477)

        const result16 = evaluate("10000-13/(-+-123+14/(---12/78+--787))")
        expect(result16).toBeCloseTo(9999.894324)

        const result17 = evaluate("0,56/-+--((---7)×-+9,8)")
        expect(result17).toBeCloseTo(-0.008163265306)

        const result18 = evaluate("-(5-2)(34(31-98)/-(3-1))")
        expect(result18).toEqual(-3417)
    })
})
