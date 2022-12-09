// React
import { useState, useEffect } from 'react';
// NextJS
import { useRouter } from 'next/router';
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../redux/actions';
// Components
import Layout from '../../../components/store/Layout';
import StoreNotFound from '../../../components/store/NotFound';
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

function StorePageIndex({ state, actions }) {
    
    const router = useRouter();
    const { store: storeName } = router.query;

    const store = state.store;
    const [ pageSections, setPageSections ] = useState([]);

    useEffect(() => {
        if(!store.template && storeName) {
            actions.getStore(storeName);
        }
    }, [storeName])

    useEffect(() => {
        const page = store?.pages?.filter( page => page.url === "" )[0];
        setPageSections(page?.sections || []);
    }, [state])

    return(
        <div>
            {state.store.error && (
                <StoreNotFound />
            )}
            {Object.keys(store).length != 0 && pageSections.length != 0 && (
                <Layout 
                    announceBar={store.announceBar}
                    header={{storeName: store.store?.name, pages: store.pages}}
                >
                    <div>
                        {pageSections?.map(section => {
                            switch (section.component) {
                                case "ImageBanner":
                                    return <ImageBanner elements={section.elements} height={section.style.height} />
                                case "RichText":
                                    return <RichText elements={section.elements} />
                                case "BlogPosts":
                                    return <BlogPosts elements={section.elements} />
                                case "Collage":
                                    return <Collage elements={section.elements} />
                                case "CollapsibleContent":
                                    return <CollapsibleContent elements={section.elements} />
                                case "CollectionList":
                                    return <CollectionList elements={section.elements} />
                                case "ContactForm":
                                    return <ContactForm elements={section.elements} />
                                case "EmailSignup":
                                    return <EmailSignup elements={section.elements} />
                                case "FeaturedCollection":
                                    return <FeaturedCollection elements={section.elements} />
                                case "FeaturedProduct":
                                    return <FeaturedProduct elements={section.elements} />
                                case "ImageWithText":
                                    return <ImageWithText elements={section.elements} />
                                case "MultiColumn":
                                    return <MultiColumn elements={section.elements} />
                                case "Slideshow":
                                    return <Slideshow elements={section.elements} height={section.style.height} />
                                case "VideoSection":
                                    return <Video elements={section.elements} />
                                case "ProductGrid":
                                    return <ProductGrid elements={section.elements} />
                            }
                        })}
                    </div>
                </Layout>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StorePageIndex);