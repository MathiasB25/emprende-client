export default function TextElement({text, size}) {

    return (
        <div className={`font-normal-weight text-${size}`}>{text}</div>
    )
}