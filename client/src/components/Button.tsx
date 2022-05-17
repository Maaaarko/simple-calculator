import React from "react"

type ButtonProps = {
    color?: string
    disabled?: boolean
    colspan?: string
    onClick?: () => void
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    color,
    disabled,
    colspan = "col-span-1",
    onClick,
    children,
}) => {
    return (
        <button
            className={`${colspan} ${color} m-0.5 p-1 rounded-xl text-2xl flex justify-center items-center text-center disabled:opacity-50`}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
