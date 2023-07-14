import axios from 'axios';
const BASE_URL = 'http://';  //where backend api is hosted

export default axios.create({
    baseURL:BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    headers: { 'Content-Type':'application/json'},
    withCredentials:true
});