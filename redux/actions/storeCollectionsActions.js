import axios from 'axios';
// Redux Types
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
} from '../types';

//GET Collections
export function getCollections({store}) {
    return async (dispatch) => {
        dispatch( getCollectionsAction() )

        try {
            const { data: collections } = await axios.get(`/api/collections/get?store=${store}`);
            dispatch(getCollectionsSuccess(collections))
        } catch (error) {
            dispatch(getCollectionsError())
        }
    }
}

//CREATE Collection
export function createCollection({body}) {
    return async (dispatch) => {
        dispatch( createCollectionAction() )

        try {
            const { data: collection } = await axios.post(`/api/collections/create`, { body });
            dispatch(createCollectionSuccess(collection))
        } catch (error) {
            dispatch(createCollectionError())
        }
    }
}

//UPDATE Collection
export function updateCollection({id, body}) {
    return async (dispatch) => {
        dispatch( updateCollectionAction() )

        try {
            const { data: collection } = await axios.post(`/api/collections/update?id=${id}`, { body });
            dispatch(updateCollectionSuccess(collection))
        } catch (error) {
            dispatch(updateCollectionError())
        }
    }
}

//DELETE Collection
export function deleteCollection({id}) {
    return async (dispatch) => {
        dispatch( deleteCollectionAction() )

        try {
            const { data: collection } = await axios.post(`/api/collections/delete?id=${id}`);
            dispatch(deleteCollectionSuccess(collection))
        } catch (error) {
            dispatch(deleteCollectionError())
        }
    }
}





// GET Collections
const getCollectionsAction = () => ({
    type: GET_STORE_COLLECTIONS
})
const getCollectionsSuccess = (collections) => ({
    type: GET_STORE_COLLECTIONS_SUCCESS,
    payload: collections
})
const getCollectionsError = () => ({
    type: GET_STORE_COLLECTIONS_ERROR
})


// CREATE Collections
const createCollectionAction = () => ({
    type: CREATE_STORE_COLLECTION
})
const createCollectionSuccess = (collection) => ({
    type: CREATE_STORE_COLLECTION_SUCCESS,
    payload: collection
})
const createCollectionError = () => ({
    type: CREATE_STORE_COLLECTION_ERROR
})


// UPDATE Collections
const updateCollectionAction = () => ({
    type: UPDATE_STORE_COLLECTION
})
const updateCollectionSuccess = (collection) => ({
    type: UPDATE_STORE_COLLECTION_SUCCESS,
    payload: collection
})
const updateCollectionError = () => ({
    type: UPDATE_STORE_COLLECTION_ERROR
})


// DELETE Collections
const deleteCollectionAction = () => ({
    type: DELETE_STORE_COLLECTION
})
const deleteCollectionSuccess = (collection) => ({
    type: DELETE_STORE_COLLECTION_SUCCESS,
    payload: collection
})
const deleteCollectionError = () => ({
    type: DELETE_STORE_COLLECTION_ERROR
})