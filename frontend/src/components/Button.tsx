import type { ReactElement } from "react"

interface ButtonType {
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    type: "primary" | "secondary" | "ternary";
    title: string;
}

const buttonStyle = {
    "primary": "bg-[#2f71e3] text-[#fff9ff] px-15 py-4",
    "secondary": "bg-[#ffffff] text-[#2f71e3] border-[#2f71e3] px-15 py-4",
    "ternary": ""
}

const DafaultStyle = "rounded-xl  flex items-center text-2xl"

export const Button = function(props : ButtonType){
    return <button className={ buttonStyle[props.type] + " border-2 " + DafaultStyle}>
        {props.title} </button>
}