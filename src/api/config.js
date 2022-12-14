import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:3001'
});

export const axiosPrivate=axios.create({
    baseURL:process.env.REACT_APP_PORT,
    withCredentials:true
});