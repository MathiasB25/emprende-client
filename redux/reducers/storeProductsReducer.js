import { 
    GET_STORE_PRODUCTS,
    GET_STORE_PRODUCTS_SUCCESS,
    GET_STORE_PRODUCTS_ERROR,
    CREATE_STORE_PRODUCT,
    CREATE_STORE_PRODUCT_SUCCESS,
    CREATE_STORE_PRODUCT_ERROR,
    UPDATE_STORE_PRODUCT,
    UPDATE_STORE_PRODUCT_SUCCESS,
    UPDATE_STORE_PRODUCT_ERROR,
    DELETE_STORE_PRODUCT,
    DELETE_STORE_PRODUCT_SUCCESS,
    DELETE_STORE_PRODUCT_ERROR,
    LOGOUT,
} from '../types';

const initalState = {
    products: [],
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_STORE_PRODUCTS: 
            return {
                ...state,
                loading: true
            }
        case GET_STORE_PRODUCTS_SUCCESS: 
            return {
                ...state,
                products: [...action.payload],
                loading: false,
                error: false,
            }
        case GET_STORE_PRODUCTS_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case CREATE_STORE_PRODUCT: 
            return {
                ...state,
                loading: true
            }
        case CREATE_STORE_PRODUCT_SUCCESS: 
            return {
                ...state,
                products: [
                    ...state.products,
                    ...action.payload
                ],
                loading: false,
                error: false,
            }
        case CREATE_STORE_PRODUCT_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case UPDATE_STORE_PRODUCT: 
            return {
                ...state,
                loading: true
            }
        case UPDATE_STORE_PRODUCT_SUCCESS: 
            return {
                ...state,
                products: [
                    ...action.payload
                ],
                loading: false,
                error: false,
            }
        case UPDATE_STORE_PRODUCT_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case DELETE_STORE_PRODUCT: 
            return {
                ...state,
                loading: true
            }
        case DELETE_STORE_PRODUCT_SUCCESS: 
            return {
                ...state,
                products: state.products.filter( product => product.id !== action.payload ),
                loading: false,
                error: false,
            }
        case DELETE_STORE_PRODUCT_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGOUT:
            return {
                ...state,
                products: [],
                error: false,
                loading: false
            }
        default:
            return state;
    }
}