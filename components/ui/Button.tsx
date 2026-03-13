import React from "react";
import { ReactNode } from "react";

type Button = {
    disabled?: boolean,
    className?: string,
    children: ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
    disabled = false,
    className,
    type = "button",
    onClick,
    children
}: Button) => {
    return <button
        type={type}
        className={`cursor-pointer text-[14px] min-w-[7em] px-4 py-2.5 outline-0 border-0 hover:opacity-85 transition-all duration-300 ${className}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>;
};
