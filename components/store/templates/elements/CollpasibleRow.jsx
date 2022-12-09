import { useState } from "react";

export default function CollapsibleRowElement({title, text}) {

    const [ active, setActive ] = useState(false);

    return(
        <div className="flex flex-col">
            <div className={`select-none flex items-center justify-between w-full px-4 py-4 cursor-pointer hover:bg-zinc-100 ${active && 'bg-zinc-100'} transition-colors`} onClick={() => setActive(!active)}>
                <div>{title}</div>
                <div><i className="fa-regular fa-chevron-down"></i></div>
            </div>
            { active && (
                <div className="my-1">
                    <div className="px-4 font-normal-weight text-sm">{text}</div>
                </div>
            )}
        </div>
    )
}