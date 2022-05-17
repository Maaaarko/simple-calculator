import React, { useState, useRef, useEffect } from "react"
import Button from "./components/Button"
import InputField from "./components/InputField"

type Data = {
    success: string
    result: string
}

function App() {
    const [value, setValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [previousResults, setPreviousResults] = useState<string[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        setIsValid(
            value?.length > 0 &&
                value?.split("").every((c) => "01234567890+-×/(),".includes(c))
        )
    }, [value])

    const onChange = (v: string) => {
        setValue(v.replaceAll("*", "×").replaceAll(".", ","))
    }

    const handleButtonInput = (v: string) => {
        setValue(value + v.replaceAll("*", "×").replaceAll(".", ","))
    }

    const handleClear = () => {
        setValue("")
    }

    const handleData = (data: Data) => {
        if (data.success) {
            setValue(data.result.toString().replaceAll(".", ","))
            setError("")

            let results = [
                data.result.toString().replaceAll(".", ","),
                ...previousResults,
            ].slice(0, 5)

            console.log(results.length)
            setPreviousResults(results)
        } else {
            setError(data.result)
        }
    }

    const handleSubmit = () => {
        if (!isValid) return

        fetch(
            `http://localhost:5000/api/evaluate?expression=${value.replaceAll(
                "+",
                "%2B"
            )}`,
            {}
        )
            .then((res) => res.json())
            .then((data) => handleData(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center items-center text-center w-full">
                <div></div>
                <div className="flex flex-col m-3 items-center">
                    <div className="flex flex-col m-3 p-3 w-full h-64 justify-center">
                        <InputField value={value} onChange={onChange} />
                        <div className="flex-1 grid grid-cols-4 justify-center items-center text-center">
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("(")}>
                                (
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput(")")}>
                                )
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleClear()}>
                                C
                            </Button>
                            <Button
                                color="bg-orange-400"
                                onClick={() => handleButtonInput("/")}>
                                /
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("7")}>
                                7
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("8")}>
                                8
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("9")}>
                                9
                            </Button>
                            <Button
                                color="bg-orange-400"
                                onClick={() => handleButtonInput("×")}>
                                ×
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("4")}>
                                4
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("5")}>
                                5
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("6")}>
                                6
                            </Button>
                            <Button
                                color="bg-orange-400"
                                onClick={() => handleButtonInput("-")}>
                                -
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("1")}>
                                1
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("2")}>
                                2
                            </Button>
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput("3")}>
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
                            <Button
                                color="bg-gray-400"
                                onClick={() => handleButtonInput(",")}>
                                ,
                            </Button>
                            <Button
                                color="bg-orange-400"
                                disabled={!isValid}
                                onClick={() => handleSubmit()}>
                                =
                            </Button>
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-500 text-center">{error}</div>
                    )}
                </div>
                <div className="invisible sm:visible flex flex-col text-center items-start justify-center w-48 self-start border rounded-sm m-3 p-3">
                    <p className="self-center">Previous results</p>
                    <br />
                    {previousResults.map((e, idx) => (
                        <p key={idx}>{e}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
