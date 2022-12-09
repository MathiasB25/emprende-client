import { 
    GET_AUTH, 
    GET_AUTH_SUCCESS, 
    SET_AUTH, 
    SET_AUTH_SUCCESS, 
    UPDATE_AUTH, 
    UPDATE_AUTH_SUCCESS, 
    DELETE_AUTH,
    AUTH_ERROR,
    LOGOUT
} from '../types';

const initalState = {
    _id: null,
    name: null,
    surname: null,
    email: null,
    role: null,
    disabled: null,
    authenticated: false,
    error: false,
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_AUTH: 
            return {
                ...state,
                loading: true
            }
        case GET_AUTH_SUCCESS: 
            return {
                ...state,
                _id: action.payload._id,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
                role: action.payload.role,
                disabled: action.payload.disabled,
                authenticated: true,
                error: false,
                loading: false,
            }
        case SET_AUTH: 
            return {
                ...state,
                loading: true
            }
        case SET_AUTH_SUCCESS: 
            return {
                ...state,
                _id: action.payload._id,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
                role: action.payload.role,
                disabled: action.payload.disabled,
                authenticated: true,
                error: false,
                loading: false,
            }
        case UPDATE_AUTH: 
            return {
                ...state,
                loading: true
            }
        case UPDATE_AUTH_SUCCESS: 
            return {
                ...state,
                loading: false,
                auth: action.payload,
                error: false
            }
        case DELETE_AUTH: 
            return {
                ...state,
                auth: {}
            }
        case AUTH_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOGOUT: 
            return {
                ...state,
                _id: null,
                name: null,
                surname: null,
                email: null,
                role: null,
                disabled: null,
                authenticated: false,
                error: false,
                loading: false
            }
        default:
            return state;
    }
}