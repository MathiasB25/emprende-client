export default function TitleElement({text, size}) {

    return (
        <div className={`font-normal-weight text-${size || "lg"}`}>{text}</div>
    )
}