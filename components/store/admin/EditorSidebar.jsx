import { useEffect } from "react";
import { useState } from "react"
import randomId from "../../../hooks/randomId"
import EditorSidebarSection from "./EditorSidebarSection";


export default function EditorSidebar({ props }) {

    const { state, setter } = props;
    const { store, pageSections, page } = state;

    const [ selectedSection, setSelectedSection ] = useState({});
    const [ actualComponent, setActualComponent ] = useState('')

    const sectionImage = (component) => {
        switch (component) {
            case "ImageBanner":
                return <i className="fa-solid fa-image"></i>
            case "TextBanner":
                return <i className="fa-solid fa-text"></i>
            case "RichText":
                return <i className="fa-solid fa-align-left"></i>
            case "BlogPosts":
                return <i className="fa-solid fa-image"></i>
            case "Collage":
                return <i className="fa-solid fa-objects-column"></i>
            case "CollapsibleContent":
                return <i className="fa-solid fa-diagram-cells"></i>
            case "CollectionList":
                return <i className="fa-solid fa-grid-2-plus"></i>
            case "ContactForm":
                return <i className="fa-solid fa-envelope"></i>
            case "EmailSignup":
                return <i className="fa-solid fa-envelope-circle-check"></i>
            case "FeaturedCollection":
                return <i className="fa-solid fa-tags"></i>
            case "FeaturedProduct":
                return <i className="fa-solid fa-tags"></i>
            case "ImageWithText":
                return <i className="fa-solid fa-image"></i>
            case "MultiColumn":
                return <i className="fa-solid fa-columns-3"></i>
            case "Slideshow":
                return <i className="fa-solid fa-image"></i>
            case "VideoSection":
                return <i className="fa-solid fa-circle-play"></i>
            case "ProductGrid":
                return <i className="fa-solid fa-grid-2-plus"></i>
        }
    }

    const handleSelectSection = (component) => {
        setActualComponent(component);
        
        if(selectedSection && Object.keys(selectedSection).length != 0) {
            return
        }
    
        if(component === "Header") {
            return
        }
        if(component === "AnnounceBar") {
            setSelectedSection(store.announceBar);
            return
        }
        if(component === "Footer") {
            setSelectedSection(store.footer);
            return
        }
    
        setSelectedSection(pageSections.filter( section => section.component === component )[0]);
    }

    useEffect(() => {
        const component = actualComponent;
    
        if(component === "Header") {
            return
        }
        if(component === "AnnounceBar") {
            setSelectedSection(store.announceBar);
            return
        }
        if(component === "Footer") {
            setSelectedSection(store.footer);
            return
        }
    
        setSelectedSection(pageSections.filter( section => section.component === component )[0]);
    }, [store, pageSections])
    
    return(
        <div className={`flex flex-col font-light`}>
            { selectedSection && Object.keys(selectedSection).length != 0 ? (
                <div>
                    <div className="flex items-center gap-3 border-b py-4 px-5">
                        <div onClick={() => setSelectedSection({})} className="cursor-pointer text-zinc-700 hover:text-black transition-colors text-lg"><i className="fa-solid fa-arrow-left-long"></i></div>
                        <div>{ selectedSection.name }</div>
                    </div>
                    <div className="flex flex-col gap-5 p-5 pt-0 divide-y anim-from-top">
                        {selectedSection.elements.map( element => {
                            return <EditorSidebarSection key={randomId()} props={{
                                element,
                                section: selectedSection,
                                state,
                                setter
                            }} />
                        })}
                    </div>
                </div>
            ) : (    
                <>
                    <h2 className="px-3 py-4 border-b text-lg font-normal">{`${page.name}`}</h2>
                    <div className="flex flex-col anim-from-top">
                        <div className="border-b">
                            <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors" onClick={() => handleSelectSection("AnnounceBar")}>
                                <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i className="fa-duotone fa-border-top"></i></div></div>
                                <div>Announce bar</div>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors" onClick={() => handleSelectSection("Header")}>
                                <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i className="fa-duotone fa-border-top"></i></div></div>
                                <div>Header</div>
                            </div>
                        </div>
                        { pageSections?.map( section => (
                            <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors" key={randomId()} onClick={() => handleSelectSection(section.component)}>
                                <div className="w-8 text-xl text-zinc-700"><div className="text-center">{sectionImage(section.component)}</div></div>
                                <div>{section.name}</div>
                            </div>
                        ))}
                        <div className="border-t">
                            <div className="flex items-center gap-2 px-5 py-3 cursor-pointer hover:bg-zinc-100 transition-colors" onClick={() => handleSelectSection("Footer")}>
                                <div className="w-8 text-xl text-zinc-700"><div className="text-center"><i className="fa-duotone fa-border-bottom"></i></div></div>
                                <div>Footer</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}