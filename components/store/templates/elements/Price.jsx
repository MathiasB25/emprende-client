export default function PriceElement({price, stock, align}) {

    return (
        <div className={`flex gap-5 justify-${align === "left" ? "start" : align === "right" ? "end" : "center"} font-normal-weight`}>
            <div className="text-lg">{`$${price} USD`}</div>
            { stock == 0 && (
                <div className="text-xs line-through text-gray-500">Sold out</div>
            )}
        </div>
    )
}