import StoreLayout from "../Layout"
// Page Sections
import {
    AnnounceBar,
    BlogPosts,
    Collage,
    CollapsibleContent,
    CollectionList,
    ContactForm,
    EmailSignup,
    FeaturedCollection,
    FeaturedProduct,
    Footer,
    Header,
    ImageBanner,
    ImageWithText,
    MultiColumn,
    Page,
    ProductGrid,
    RichText,
    Slideshow,
    Video,
} from '../../../components/store/templates/sections';
import randomId from "../../../hooks/randomId";
import { useEffect } from "react";
import useContext from "../../../hooks/useAppContext";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function EditorContent({ store, pageSections }) {

    return (
        <div>
            <StoreLayout
                href={false} 
                announceBar={store.announceBar}
                header={{storeName: store.store?.name, pages: store.pages}}
            >
                {pageSections?.map(section => {
                    switch (section.component) {
                        case "ImageBanner":
                            return <ImageBanner key={randomId()} elements={section.elements} height={section.style.height} />
                        case "RichText":
                            return <RichText key={randomId()} elements={section.elements} />
                        case "BlogPosts":
                            return <BlogPosts key={randomId()} elements={section.elements} />
                        case "Collage":
                            return <Collage key={randomId()} elements={section.elements} />
                        case "CollapsibleContent":
                            return <CollapsibleContent key={randomId()} elements={section.elements} />
                        case "CollectionList":
                            return <CollectionList key={randomId()} elements={section.elements} />
                        case "ContactForm":
                            return <ContactForm key={randomId()} elements={section.elements} />
                        case "EmailSignup":
                            return <EmailSignup key={randomId()} elements={section.elements} />
                        case "FeaturedCollection":
                            return <FeaturedCollection key={randomId()} elements={section.elements} />
                        case "FeaturedProduct":
                            return <FeaturedProduct key={randomId()} elements={section.elements} />
                        case "ImageWithText":
                            return <ImageWithText key={randomId()} elements={section.elements} />
                        case "MultiColumn":
                            return <MultiColumn key={randomId()} elements={section.elements} />
                        case "Slideshow":
                            return <Slideshow key={randomId()} elements={section.elements} height={section.style.height} />
                        case "VideoSection":
                            return <Video key={randomId()} elements={section.elements} />
                        case "ProductGrid":
                            return <ProductGrid key={randomId()} elements={section.elements} />
                    }
                })}
            </StoreLayout>
        </div>
    )
}