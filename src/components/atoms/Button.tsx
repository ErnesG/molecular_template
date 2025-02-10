import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
}

export function Button ({label, className, ...props}: ButtonProps) {
    const customStyle = !className ? '' : className;
    return <button className={`px-4 py-2 bg-blue-500 text-white rounded ${customStyle}`} {...props}>{label}</button>
}

