import axios from 'axios';
// Redux Types
import { 
    GET_STORE, 
    GET_STORE_SUCCESS, 
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





// GET Store
const getStoreAction = () => ({
    type: GET_STORE
})

const getStoreSuccessAction = (store) => ({
    type: GET_STORE_SUCCESS,
    payload: store
})

// Store ERROR
const storeErrorAction = () => ({
    type: STORE_ERROR
})