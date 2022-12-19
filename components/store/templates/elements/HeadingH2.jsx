export default function HeadingH2Element({text, color, size, weight, isStatic}) {

    return (
        <h2 style={{color}} className={`text-${size || "2xl"} lg:text-4xl font-${weight || "normal-weight"} ${isStatic ? '' : 'section-title'}`}>
            {text}
        </h2>
    )
}