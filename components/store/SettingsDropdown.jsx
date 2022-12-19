import { useState } from "react";

export default function StoreSettingsDropdown({children, title, icon, isActive}) {
    
    const [ active, setActive ] = useState(isActive && isActive || false);

    return(
        <div className="border border-zinc-200 rounded-md">
            <div className={`cursor-pointer select-none`} onClick={() => setActive(!active)}>
                <div className={`flex items-center justify-between border-l-4 ${active ? 'border-main-colordark' : 'border-white'} transition-colors py-6 ${active ? 'rounded-t-md' : 'rounded-md'}`}>
                    <div className={`flex items-center gap-2 px-3`}>
                        <div className={`${active ? 'text-main-colordark' : 'text-zinc-600'} transition-colors text-2xl w-10 flex justify-center`}>{icon}</div>
                        <div className={`${active && 'text-black'} text-zinc-600 transition-colors`}>{title}</div>
                    </div>
                    <div className="px-5"><i className={`${active && 'rotate-180'} transition-transform fa-regular fa-chevron-down`}></i></div>
                </div>
            </div>
            { active && (
                <div className="rounded-b-md">
                    {children}
                </div>
            )}
        </div>
    )
}