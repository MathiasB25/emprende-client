import { combineReducers } from 'redux';
/* Reducers */
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import myStoreReducer from './myStoreReducer';

export default combineReducers({
    auth: authReducer,
    store: storeReducer,
    myStore: myStoreReducer,
    /* storeCollections: storeCollectionsReducer,
    storeProducts: storeProductsReducer, */
});