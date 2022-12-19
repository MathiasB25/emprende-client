import { useState } from "react"
import randomId from "../../../hooks/randomId"


export default function EditorSidebar({ store, pageSections, pageName }) {
    
    const [ selectedSection, setSelectedSection ] = useState(null);

    const sectionImage = (component) => {
        switch (component) {
            case "ImageBanner":
                return <i class="fa-solid fa-image"></i>
            case "TextBanner":
                return <i class="fa-solid fa-text"></i>
            case "RichText":
                return <i class="fa-solid fa-align-left"></i>
            case "BlogPosts":
                return <i class="fa-solid fa-image"></i>
            case "Collage":
                return <i class="fa-solid fa-objects-column"></i>
            case "CollapsibleContent":
                return <i class="fa-solid fa-diagram-cells"></i>
            case "CollectionList":
                return <i class="fa-solid fa-grid-2-plus"></i>
            case "ContactForm":
                return <i class="fa-solid fa-envelope"></i>
            case "EmailSignup":
                return <i class="fa-solid fa-envelope-circle-check"></i>
            case "FeaturedCollection":
                return <i class="fa-solid fa-tags"></i>
            case "FeaturedProduct":
                return <i class="fa-solid fa-tags"></i>
            case "ImageWithText":
                return <i class="fa-solid fa-image"></i>
            case "MultiColumn":
                return <i class="fa-solid fa-columns-3"></i>
            case "Slideshow":
                return <i class="fa-solid fa-image"></i>
            case "VideoSection":
                return <i class="fa-solid fa-circle-play"></i>
            case "ProductGrid":
                return <i class="fa-solid fa-grid-2-plus"></i>
        }
    }

    return(
        <div className="flex flex-col font-light">
            <h2 className="px-3 py-4 border-b border-zinc-200 text-lg font-normal">{`Pagina: ${pageName}`}</h2>
            <div className="flex flex-col">
                <div className="border-b">
                    <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors border-zinc-200">
                        <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i class="fa-duotone fa-border-top"></i></div></div>
                        <div>Announce bar</div>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors border-zinc-200">
                        <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i class="fa-duotone fa-border-top"></i></div></div>
                        <div>Header</div>
                    </div>
                </div>
                { pageSections?.map( section => (
                    <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors border-zinc-200" key={randomId()}>
                        <div className="w-8 text-xl text-zinc-700"><div className="text-center">{sectionImage(section.component)}</div></div>
                        <div>{section.name}</div>
                    </div>
                ))}
                <div className="border-t">
                    <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors border-zinc-200">
                        <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i class="fa-duotone fa-border-bottom"></i></div></div>
                        <div>Footer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}