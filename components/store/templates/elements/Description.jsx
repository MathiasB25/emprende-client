export default function DescriptionElement({text, align, color, maxWidth}) {

    return (
        <div style={{color, maxWidth}} className={`mx-auto font-normal-weight text-sm text-${align || "center"} break-all`}>{text}</div>
    )
}