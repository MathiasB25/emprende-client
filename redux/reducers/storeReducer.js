import { 
    GET_STORE, 
    GET_STORE_SUCCESS, 
    STORE_ERROR,
    LOGOUT,
} from '../types';

const initalState = {
    announceBar: null,
    store: null,
    template: null,
    component: null,
    pages: null,
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_STORE: 
            return {
                ...state,
                loading: true
            }
        case GET_STORE_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: false,
                announceBar: action.payload.announceBar,
                store: action.payload.store,
                template: action.payload.template,
                component: action.payload.component,
                pages: action.payload.pages,
            }
        case STORE_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}