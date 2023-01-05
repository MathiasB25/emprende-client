import axios from 'axios';
// Redux Types
import { 
    GET_STORE, 
    GET_STORE_SUCCESS, 
    UPDATE_STORE_SECTION,
    STORE_ERROR
} from '../types';

//GET Store
export function getStore(url) {
    return async (dispatch) => {
        dispatch( getStoreAction() )

        try {
            const { data: store } = await axios.post('/api/getStore', {url})
            dispatch(getStoreSuccessAction(store))
        } catch (error) {
            dispatch(storeErrorAction())
        }
    }
}

export function updateStoreSection(data) {
    return async (dispatch) => {
        dispatch(updateStoreSectionAction(data))
    }
}





// GET Store
const getStoreAction = () => ({
    type: GET_STORE
})

const getStoreSuccessAction = (store) => ({
    type: GET_STORE_SUCCESS,
    payload: store
})

// Update store section
const updateStoreSectionAction = (data) => ({
    type: UPDATE_STORE_SECTION,
    payload: data
})

// Store ERROR
const storeErrorAction = () => ({
    type: STORE_ERROR
})