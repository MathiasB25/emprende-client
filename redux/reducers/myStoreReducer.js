import { 
    GET_MY_STORE,
    GET_MY_STORE_SUCCESS,
    UPDATE_MY_STORE,
    UPDATE_MY_STORE_SUCCESS,
    DELETE_MY_STORE,
    SET_MY_STORE_TEMPLATE,
    SET_MY_STORE_TEMPLATE_SUCCESS,
    ADD_MY_STORE_TEMPLATE,
    ADD_MY_STORE_TEMPLATE_SUCCESS,
    MY_STORE_ERROR,
    LOGOUT,
    CREATE_MY_STORE,
} from '../types';

const initalState = {
    _id: null,
    user: null,
    name: null,
    url: null,
    ownedTemplates: null,
    template: null,
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case CREATE_MY_STORE:
            return {
                ...state,
                loading: true
            }
        case GET_MY_STORE: 
            return {
                ...state,
                loading: true
            }
        case GET_MY_STORE_SUCCESS: 
            return {
                ...state,
                _id: action.payload._id,
                user: action.payload.user,
                name: action.payload.name,
                url: action.payload.url,
                ownedTemplates: action.payload.ownedTemplates,
                template: action.payload.template,
                error: false,
                loading: false,
            }
        case UPDATE_MY_STORE: 
            return {
                ...state,
                loading: true
            }
        case UPDATE_MY_STORE_SUCCESS: 
            return {
                ...state,
                loading: false,
                myStore: action.payload,
                error: false
            }
        case DELETE_MY_STORE: 
            return {
                ...state,
                myStore: {}
            }
        case SET_MY_STORE_TEMPLATE:
            return {
                ...state,
                loading: true
            }
        case SET_MY_STORE_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                template: {
                    ...state.template,
                    ...action.payload
                }
            }
        case ADD_MY_STORE_TEMPLATE:
            return {
                ...state,
                loading: true
            }
        case ADD_MY_STORE_TEMPLATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ownedTemplates: [
                    ...state.ownedTemplates,
                    action.payload
                ]
            }
        case MY_STORE_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGOUT: 
            return {
                ...state,
                _id: null,
                user: null,
                name: null,
                url: null,
                ownedTemplates: null,
                template: null,
                error: false,
                loading: false
            }
        default:
            return state;
    }
}