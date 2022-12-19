
export default function ColumnElement({heading, description}) {

    return (
        <div className="flex flex-col gap-3 font-normal-weight text-center">
            <div>{heading}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    )
}