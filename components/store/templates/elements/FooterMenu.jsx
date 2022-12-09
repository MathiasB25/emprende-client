import Link from 'next/link';

export default function FooterMenuElement({heading, pages}) {

    return (
        <div className="flex flex-col gap-4 font-normal-weight">
            <div className="text-lg">{heading}</div>
            <div className="flex flex-col gap-0.5 text-sm text-gray-500">
                {pages.map(page => (
                    <div className="w-fit hover:underline hover:text-black">
                        <Link key={page.name} href={page.url}>{page.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}