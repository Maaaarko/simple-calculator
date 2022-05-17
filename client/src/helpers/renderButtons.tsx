import React from "react"
import Button from "../components/Button"

type Props = {
    handleButtonInput: (v: string) => void
    handleClear: () => void
    handleSubmit: () => void
    isValid: boolean
}

const renderButtons = ({
    handleButtonInput,
    handleClear,
    handleSubmit,
    isValid,
}: Props) => {
    return (
        <>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("(")}>
                (
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput(")")}>
                )
            </Button>
            <Button color="bg-gray-400" onClick={() => handleClear()}>
                C
            </Button>
            <Button
                color="bg-orange-400"
                onClick={() => handleButtonInput("/")}>
                /
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("7")}>
                7
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("8")}>
                8
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("9")}>
                9
            </Button>
            <Button
                color="bg-orange-400"
                onClick={() => handleButtonInput("×")}>
                ×
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("4")}>
                4
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("5")}>
                5
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("6")}>
                6
            </Button>
            <Button
                color="bg-orange-400"
                onClick={() => handleButtonInput("-")}>
                -
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("1")}>
                1
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("2")}>
                2
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput("3")}>
                3
            </Button>
            <Button
                color="bg-orange-400"
                onClick={() => handleButtonInput("+")}>
                +
            </Button>
            <Button
                color="bg-gray-400"
                colspan="col-span-2"
                onClick={() => handleButtonInput("0")}>
                0
            </Button>
            <Button color="bg-gray-400" onClick={() => handleButtonInput(",")}>
                ,
            </Button>
            <Button
                color="bg-orange-400"
                disabled={!isValid}
                onClick={() => handleSubmit()}>
                =
            </Button>
        </>
    )
}

export default renderButtons
