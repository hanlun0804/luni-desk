import { FC, ReactNode } from "react"

type ButtonProps = {
    text: string
    className?: string
    color?: string
    icon?: ReactNode
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ text, className, color, icon }) => {
    return (
        <button
            className={`flex flex-row gap-3 px-6 py-3 text-white rounded-md font-bold ${color || 'bg-slate-teal'} border-dark-slate-teal border-2 shadow-lg hover:scale-[102%]  ${className}`}
        >
            {text} {icon && icon}
        </button>
    );
}

export default Button;