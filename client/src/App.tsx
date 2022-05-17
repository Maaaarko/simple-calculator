import React, { useState, useRef, useEffect } from "react"
import Calculator from "./components/Calculator"
import InputField from "./components/InputField"
import renderButtons from "./helpers/renderButtons"

function App() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex flex-col p-5 mb-10 justify-center items-center">
                <div className="font-bold text-3xl">Simple Calculator</div>
            </div>
            <Calculator />
            <a
                className="mt-10 font-semibold text-blue-600 underline"
                href="https://github.com/Maaaarko/simple-calculator">
                GitHub
            </a>
        </div>
    )
}

export default App
