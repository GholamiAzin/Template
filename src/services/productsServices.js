import axios from 'axios'

const SERVER_URL = 'http://localhost:9000'

//to fetch all our produts
export const getAllProducts = () =>{
    const url = `${SERVER_URL}/list`
    return axios.get(url)
} 

//to fetch one of our produts
export const getProduct = (productID) =>{
    const url = `${SERVER_URL}/list/${productID}`
    return axios.get(url)
}

//to update one of our produts
//product is an object
export const updateProduct = (product, productID) =>{
    const url = `${SERVER_URL}/list/${productID}`
    return axios.put(url,product)
}

//to delete one of our produts
export const deleteProduct = (productID) =>{
    const url = `${SERVER_URL}/list/${productID}`
    return axios.delete(url)
}
