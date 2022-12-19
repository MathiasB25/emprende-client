import axios from 'axios';

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
import useAxiosConfig from '../../hooks/useAxiosConfig';

//GET auth
export function getAuth() {
    return async (dispatch) => {
        dispatch( getAuthAction() )

        try {
            const token = localStorage.getItem('WRkAxpZRq6Gv')
            if(!token) {
                dispatch( authErrorAction() );
                return;
            }

            const config = useAxiosConfig();
            const { data: auth } = await axios.post('/api/userProfile', { config });
            dispatch(getAuthSuccessAction(auth))
        } catch (error) {
            dispatch(authErrorAction())
        }
    }
}

//SET auth
export function setAuth(email, password) {
    return async (dispatch) => {
        dispatch( setAuthAction() )

        try {
            const { data: auth } = await axios.post('/api/userLogin', { email, password });
            localStorage.setItem('WRkAxpZRq6Gv', auth.token);
            dispatch(setAuthSuccessAction(auth))
        } catch (error) {
            dispatch(authErrorAction())
        }
    }
}

//UPDATE auth
export function updateAuth(auth) {
    return (dispatch) => {
        dispatch( updateAuthAction() )

        try {
            dispatch(updateAuthSuccessAction(auth))
        } catch (error) {
            dispatch(authErrorAction())
        }
    }
}

//DELETE auth
export function deleteAuth() {
    return (dispatch) => {
        dispatch( deleteAuthAction() )
    }
}

export function authLogout() {
    return (dispatch) => {
        dispatch( logoutAction() )
        localStorage.removeItem('WRkAxpZRq6Gv');
    }
}





// GET auth
const getAuthAction = () => ({
    type: GET_AUTH
})

const getAuthSuccessAction = (auth) => ({
    type: GET_AUTH_SUCCESS,
    payload: auth
})

// SET auth
const setAuthAction = () => ({
    type: SET_AUTH
})

const setAuthSuccessAction = (auth) => ({
    type: SET_AUTH_SUCCESS,
    payload: auth
})

// UPDATE auth
const updateAuthAction = () => ({
    type: UPDATE_AUTH
})

const updateAuthSuccessAction = (auth) => ({
    type: UPDATE_AUTH_SUCCESS,
    payload: auth
})

// DELETE auth
const deleteAuthAction = () => ({
    type: DELETE_AUTH
})

// ERROR
const authErrorAction = () => ({
    type: AUTH_ERROR
})

const logoutAction = () => ({
    type: LOGOUT
})