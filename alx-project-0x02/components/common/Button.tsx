import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({label, onClick, size, shape}) => {
    return (
        <button onClick={onClick} className={`${size} ${shape}`}>
            {label}
        </button>
    );
}

export default Button;
