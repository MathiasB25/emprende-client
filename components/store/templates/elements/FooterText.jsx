

export default function FooterTextElement({heading, description}) {

    return (
        <div className="flex flex-col gap-4 font-normal-weight">
            <div className="text-lg">{heading}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    )
}