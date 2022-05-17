import React from "react"

type InputFieldProps = {
    value: string
    onChange: (value: string) => void
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
    return (
        <div className="flex-1 mb-1 p-2 border-2 rounded-xl">
            <input
                type="text"
                value={value}
                pattern="/^[\d ()+-]+$/"
                className="outline-none border-0"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default InputField
