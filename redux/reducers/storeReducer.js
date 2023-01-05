import { createReducer } from '@reduxjs/toolkit'

import { 
    GET_STORE, 
    GET_STORE_SUCCESS, 
    UPDATE_STORE_SECTION,
    STORE_ERROR,
    LOGOUT,
} from '../types';

const initalState = {
    announceBar: null,
    store: null,
    template: null,
    component: null,
    pages: null,
    footer: null,
    error: false,
    loading: false
}

const reducer = createReducer(initalState, {
    GET_STORE: (state, action) => {
        state.loading = true
    },
    GET_STORE_SUCCESS: (state, action) => {
        state.loading = false,
        state.error = false,
        state.announceBar = action.payload.announceBar,
        state.store = action.payload.store,
        state.template = action.payload.template,
        state.component = action.payload.component,
        state.pages = action.payload.pages,
        state.footer = action.payload.footer
    },
    UPDATE_STORE_SECTION: (state, action) => {
        const { section, element, value } = action.payload;
        if(section.component === 'AnnounceBar') {
            state.announceBar.elements.map( elem => {
                if(elem.id === element.id) {
                    elem.value.text = value.text;
                }
            })
        } else if(section.component === 'Footer') {
            state.footer.elements.map( elem => {
                if(elem.id === element.id) {
                    if(element.component === "FooterMenu") {
                        elem.storeMenu = value.storeMenu;
                    } else {
                        elem.value.text = value.text;
                        elem.value.description = value.description || element.value.description;
                    }
                }
            })
        } else {
            state.pages.map( page => {
                page.sections.map( sectionMap => {
                    if(sectionMap.id === section.id || sectionMap.component === section.component) {
                        sectionMap.elements.map( elem => {
                            if(elem.id === element.id) {
                                typeof value.storeCollection === 'string' ? elem.storeCollection = value.storeCollection : elem.storeCollection;
                                typeof value.storeProduct === 'string' ? elem.storeProduct = value.storeProduct : elem.storeProduct;
                                typeof value.heading === 'string' ? elem.value.heading = value.heading : elem.value.heading;
                                typeof value.text === 'string' ? elem.value.text = value.text : elem.value.text;
                                typeof value.description === 'string' ? elem.value.description = value.description : elem.value.description;
                                typeof value.media === 'string' ? elem.value.media = value.media : elem.value.media;
                                typeof value.id === 'string' ? elem.id = value.id : elem.id;
                                elem.modified = true;
                            } 
                        })
                    }
                })
            });
        }
    },
    STORE_ERROR: (state, action) => {
        state.loading = false,
        state.error = true
    }
})

export default reducer