import axios from 'axios'

export default axios.create({
    baseURL:process.env.REACT_APP_PORT
})

export const axiosPrivate=axios.create({
    baseURL:process.env.REACT_APP_PORT,
    withCredentials:true
})