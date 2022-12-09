import { combineReducers } from 'redux';
/* Reducers */
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import myStoreReducer from './myStoreReducer';
import storeCollectionsReducer from './storeCollectionsReducer';
import storeProductsReducer from './storeProductsReducer';

export default combineReducers({
    auth: authReducer,
    store: storeReducer,
    myStore: myStoreReducer,
    /* storeCollections: storeCollectionsReducer,
    storeProducts: storeProductsReducer, */
});