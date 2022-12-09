export default function ButtonElement({text, color, border, bg, width}) {
    return (
        <button type="text" style={{borderColor: border, background: bg, width, maxWidth: "100%"}} className={`px-5 py-3 border font-normal-weight text-sm cursor-pointer`}>
            <div style={{color}}>{text}</div>
        </button>
    )
}