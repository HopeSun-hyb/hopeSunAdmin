import axios from 'axios'
const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API;
const request = axios.create({
    baseURL:BASEURL,
    timeout: 6000,
})

export default request
