import { useState } from "react";

export default function QuantitySelectorElement({align}) {
    const [ value, setValue ] = useState(1);

    function handlePlus() {
        setValue(value + 1);
    }

    function handleMinus() {
        value <= 1 ? setValue(value) : setValue(value - 1);
    }

    return (
        <div className={`flex justify-${align === "left" ? "start" : align === "right" ? "end" : "center"}`}>
            <div className={`flex flex-col w-fit`}>
                <div className="font-normal-weight text-sm text-center">Cantidad</div>
                <div className="flex border border-zinc-400 w-fit">
                    <div className="flex items-center justify-center w-10 h-10 cursor-pointer text-xs" onClick={handleMinus}><i className="fa-solid fa-minus"></i></div>
                    <input className="outline-none text-center w-10 h-10" type="number" name="" id="" min={1} value={value} onChange={e => setValue(Number(e.target.value))} />
                    <div className="flex items-center justify-center w-10 h-10 cursor-pointer text-xs" onClick={handlePlus}><i className="fa-solid fa-plus"></i></div>
                </div>
            </div>
        </div>
    )
}