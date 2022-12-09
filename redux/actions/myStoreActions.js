import axios from 'axios';
// Hooks
import useAxiosConfig from '../../hooks/useAxiosConfig';
// Redux Types
import { 
    CREATE_MY_STORE,
    GET_MY_STORE,
    GET_MY_STORE_SUCCESS,
    UPDATE_MY_STORE,
    UPDATE_MY_STORE_SUCCESS,
    DELETE_MY_STORE,
    MY_STORE_ERROR,
    SET_MY_STORE_TEMPLATE,
    SET_MY_STORE_TEMPLATE_SUCCESS,
    LOGOUT
} from '../types';

// CREATE My Store
export function createMyStore({ name }) {
    return async (dispatch) => {
        dispatch( createMyStoreAction() );

        try {
            const config = useAxiosConfig();
            if(config.headers.Authorization.includes('null')) {
                dispatch( myStoreErrorAction() )
            }
            const { data } = await axios.post('/api/createStore', {
                name,
                config
            })
            dispatch(getMyStoreSuccessAction(data.data))
        } catch (error) {
            dispatch( myStoreErrorAction() )
        }
    }
}

//GET My Store
export function getMyStore() {
    return async (dispatch) => {
        dispatch( getMyStoreAction() )

        try {
            const config = useAxiosConfig();
            if(config.headers.Authorization.includes('null')) {
                dispatch( myStoreErrorAction() )
            }
            const { data: store } = await axios.post('/api/getMyStore', {
                params: {
                    template: true
                },
                config
            })
            dispatch(getMyStoreSuccessAction(store))
        } catch (error) {
            dispatch(myStoreErrorAction())
        }
    }
}

//UPDATE Store
export function updateMyStore(store) {
    return (dispatch) => {
        dispatch( updateMyStoreAction() )

        try {
            dispatch(updateMyStoreSuccessAction(store))
        } catch (error) {
            dispatch(myStoreErrorAction())
        }
    }
}

//DELETE Store
export function deleteMyStore() {
    return (dispatch) => {
        dispatch( deleteMyStoreAction() )
    }
}

export function setTemplate(template, config) {
    return async (dispatch) => {
        dispatch( setTemplateAction() )

        try {
            const {data} = await axios.post('/api/setTemplate', { template: template._id, config });
            console.log(data)
            dispatch(setTemplateSuccessAction(template))
        } catch (error) {
            dispatch(myStoreErrorAction())
        }
    }
}

export function myStoreLogout() {
    return (dispatch) => {
        dispatch( logoutAction() )
    }
}




// CREATE My Store
const createMyStoreAction = () => ({
    type: CREATE_MY_STORE
})

// GET My Store
const getMyStoreAction = () => ({
    type: GET_MY_STORE
})

const getMyStoreSuccessAction = (store) => ({
    type: GET_MY_STORE_SUCCESS,
    payload: store
})

// UPDATE My Store
const updateMyStoreAction = () => ({
    type: UPDATE_MY_STORE
})

const updateMyStoreSuccessAction = (store) => ({
    type: UPDATE_MY_STORE_SUCCESS,
    payload: store
})

// DELETE My Store
const deleteMyStoreAction = () => ({
    type: DELETE_MY_STORE
})

// My Store ERROR
const myStoreErrorAction = (state) => ({
    type: MY_STORE_ERROR
})

const setTemplateAction = () => ({
    type: SET_MY_STORE_TEMPLATE
})

const setTemplateSuccessAction = (myStore) => ({
    type: SET_MY_STORE_TEMPLATE_SUCCESS,
    payload: myStore
})

const logoutAction = () => ({
    type: LOGOUT
})