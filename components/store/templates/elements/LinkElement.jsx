import Link from "next/link";

export default function LinkElement({text, href, size, active}) {

    return (
        <div className={`font-normal-weight text-${size} ${active ? 'text-black' : 'text-gray-500'} hover:text-black hover:border-b border-black`}>
            <Link href={href}>{text}</Link>
        </div>
    )
}