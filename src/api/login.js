import request from '../utils/request'
// 
const getSms = (params) => {
    return request.post('/getSms/', params)
}

const login = (params) => {
    return request.post('/login/', params)
}


export {
    getSms,
    login
}