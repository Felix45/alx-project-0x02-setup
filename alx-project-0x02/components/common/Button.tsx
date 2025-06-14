import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({label, onClick, size, shape}) => {
    return (
        <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white mr-2 font-bold py-2 px-4 ${size} ${shape}`}>
            {label}
        </button>
    );
}

export default Button;
