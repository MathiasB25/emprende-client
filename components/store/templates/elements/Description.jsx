export default function DescriptionElement({text, align, color, maxWidth}) {

    return (
        <div style={{color, maxWidth}} className={`w-full font-normal-weight text-sm text-${align || "center"}`}>{text}</div>
    )
}