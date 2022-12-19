import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FooterMenuElement({href, heading, pages}) {

    const router = useRouter();
    const { store: storeName } = router.query;

    return (
        <div className="flex flex-col gap-4 font-normal-weight">
            <div className="text-lg">{heading}</div>
            <div className="flex flex-col gap-0.5 text-sm text-gray-500">
                {pages.map(page => (
                    <div key={page.name} className="w-fit hover:underline hover:text-black">
                        <Link key={page.name} href={href && storeName ? `/store/${storeName}/${page.url}` : '#'}>{page.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}