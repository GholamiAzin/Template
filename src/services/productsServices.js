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

//to create a user in signUp
export const createUser =(user)=>{
    const url = `${SERVER_URL}/users`
    return axios.post(url,user)
}

//to fetch a user data
export const getUser =(userId)=>{
    const url = `${SERVER_URL}/users/${userId}`
    return axios.get(url)
}

//to fetch all users data
export const getAllUsers =()=>{
    const url = `${SERVER_URL}/users`
    return axios.get(url)
}

//to update user in database
export const updateUser =(updateData,userId)=>{
    const url = `${SERVER_URL}/users/${userId}`
    return axios.put(url,updateData)
}
