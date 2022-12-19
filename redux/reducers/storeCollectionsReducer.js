import { 
    GET_STORE_COLLECTIONS,
    GET_STORE_COLLECTIONS_SUCCESS,
    GET_STORE_COLLECTIONS_ERROR,
    CREATE_STORE_COLLECTION,
    CREATE_STORE_COLLECTION_SUCCESS,
    CREATE_STORE_COLLECTION_ERROR,
    UPDATE_STORE_COLLECTION,
    UPDATE_STORE_COLLECTION_SUCCESS,
    UPDATE_STORE_COLLECTION_ERROR,
    DELETE_STORE_COLLECTION,
    DELETE_STORE_COLLECTION_SUCCESS,
    DELETE_STORE_COLLECTION_ERROR,
    LOGOUT,
} from '../types';

const initalState = {
    collections: [],
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_STORE_COLLECTIONS: 
            return {
                ...state,
                loading: true
            }
        case GET_STORE_COLLECTIONS_SUCCESS: 
            return {
                ...state,
                collections: [...action.payload],
                loading: false,
                error: false,
            }
        case GET_STORE_COLLECTIONS_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case CREATE_STORE_COLLECTION: 
            return {
                ...state,
                loading: true
            }
        case CREATE_STORE_COLLECTION_SUCCESS: 
            return {
                ...state,
                collections: [
                    ...state.products,
                    ...action.payload
                ],
                loading: false,
                error: false,
            }
        case CREATE_STORE_COLLECTION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case UPDATE_STORE_COLLECTION: 
            return {
                ...state,
                loading: true
            }
        case UPDATE_STORE_COLLECTION_SUCCESS: 
            return {
                ...state,
                collections: [
                    ...action.payload
                ],
                loading: false,
                error: false,
            }
        case UPDATE_STORE_COLLECTION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case DELETE_STORE_COLLECTION: 
            return {
                ...state,
                loading: true
            }
        case DELETE_STORE_COLLECTION_SUCCESS: 
            return {
                ...state,
                collections: state.collections.filter( collection => collection.id !== action.payload ),
                loading: false,
                error: false,
            }
        case DELETE_STORE_COLLECTION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGOUT:
            return {
                ...state,
                collections: [],
                error: false,
                loading: false
            }
        default:
            return state;
    }
}