import { AnnounceBar, Header, Footer } from '../store/templates/sections'

export default function StoreLayout({ announceBar, header, footer, children, href }) {

    return(
        <>
            {announceBar.text && (
                <AnnounceBar elements={[
                    { value: { text: announceBar?.text, size: announceBar?.size} }
                ]} />
            )}
            <Header href={href} elements={[
                { component: "HeadingH4", value: { text: header.storeName } },
                header.pages.map(page => (
                    { component: "LinkElement", value: { text: page.name, href: `/store/${header.storeName?.toLowerCase()}/${page.url}`, size: "base", url: page.url } }
                ))
            ]} />
            {children}
            <Footer href={href} elements={[
                { component: "FooterMenu", value: { heading: "Quick links", pages: header.pages } },
                { component: "FooterMenu", value: { heading: "Info", pages: header.pages } },
                { component: "FooterText", value: { heading: "Nuestra misión", description: "Share contact information, store details, and brand content with your customers." } },
            ]} storeName={header.storeName} />
        </>
    )
}