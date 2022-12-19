import { BuyButton } from "."

export default function ImageContentElement({title, description, buttonText}) {
    return(
        <div className="h-full flex items-center justify-center z-10">
            <div className="flex flex-col gap-6 bg-white w-auto h-fit py-10 px-10 text-center" style={{maxWidth: "33rem", minWidth: "27rem"}}>
                <div className="text-4xl">{title}</div>
                <div className="text-sm break-words">{description}</div>
                <div className="mx-auto"><BuyButton text={buttonText} bg={"gray"} border={"transparent"} color={"white"} /></div>
            </div>
        </div>
    )
}