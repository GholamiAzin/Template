import axios from 'axios'

const SERVER_URL = 'http://localhost:9000'


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

//to get a user data
export const getUserData = async(email,pass)=>{
    let newUrl = ''
    return getAllUsers().then(result=>{// its like we write return axios.get(newUrl)
        const findUser = result?.data.find(user=>email === user.email && pass === user.password)
        // console.log('findUser ', findUser);
        newUrl = `${SERVER_URL}/users/${findUser?.id}`
        return axios.get(newUrl)//bc its an asycronic function we should wait to get the result then return it
    }).catch(error=>console.log('error ',error))
}
// export const getUserData =async (email,pass)=>{//bc its two asyncronic fn so we have to use two async/await
//     let newUrl = ''
//     await getAllUsers().then(result=>{//wait to recive all the users from database 
//         const findUser = result?.data.find(user=>email === user.email && pass === user.password)
//         // console.log('findUser ', findUser);
//         newUrl = `${SERVER_URL}/users/${findUser?.id}`
//     }).catch(error=>console.log('error ',error))
//     return axios.get(newUrl)// then after wait to get the user with url from database
// }