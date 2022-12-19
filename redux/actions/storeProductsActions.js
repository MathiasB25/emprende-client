import axios from 'axios';
// Redux Types
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
} from '../types';

//GET Products
export function getProducts({store}) {
    return async (dispatch) => {
        dispatch( getProductsAction() )

        try {
            const { data: products } = await axios.get(`/api/products/get?store=${store}`);
            dispatch(getProductsSuccess(products))
        } catch (error) {
            dispatch(getProductsError())
        }
    }
}

//CREATE Product
export function createProduct({body}) {
    return async (dispatch) => {
        dispatch( createProductAction() )

        try {
            const { data: product } = await axios.post(`/api/products/create`, { body });
            dispatch(createProductSuccess(product))
        } catch (error) {
            dispatch(createProductError())
        }
    }
}

//UPDATE Product
export function updateProduct({id, body}) {
    return async (dispatch) => {
        dispatch( updateProductAction() )

        try {
            const { data: product } = await axios.post(`/api/products/update?id=${id}`, { body });
            dispatch(updateProductSuccess(product))
        } catch (error) {
            dispatch(updateProductError())
        }
    }
}

//DELETE Product
export function deleteProduct({id}) {
    return async (dispatch) => {
        dispatch( deleteProductAction() )

        try {
            const { data: product } = await axios.post(`/api/products/delete?id=${id}`);
            dispatch(deleteProductSuccess(product))
        } catch (error) {
            dispatch(deleteProductError())
        }
    }
}





// GET Products
const getProductsAction = () => ({
    type: GET_STORE_PRODUCTS
})
const getProductsSuccess = (products) => ({
    type: GET_STORE_PRODUCTS_SUCCESS,
    payload: products
})
const getProductsError = () => ({
    type: GET_STORE_PRODUCTS_ERROR
})


// CREATE Product
const createProductAction = () => ({
    type: CREATE_STORE_PRODUCT
})
const createProductSuccess = (product) => ({
    type: CREATE_STORE_PRODUCT_SUCCESS,
    payload: product
})
const createProductError = () => ({
    type: CREATE_STORE_PRODUCT_ERROR
})


// UPDATE Product
const updateProductAction = () => ({
    type: UPDATE_STORE_PRODUCT
})
const updateProductSuccess = (product) => ({
    type: UPDATE_STORE_PRODUCT_SUCCESS,
    payload: product
})
const updateProductError = () => ({
    type: UPDATE_STORE_PRODUCT_ERROR
})


// DELETE Product
const deleteProductAction = () => ({
    type: DELETE_STORE_PRODUCT
})
const deleteProductSuccess = (product) => ({
    type: DELETE_STORE_PRODUCT_SUCCESS,
    payload: product
})
const deleteProductError = () => ({
    type: DELETE_STORE_PRODUCT_ERROR
})