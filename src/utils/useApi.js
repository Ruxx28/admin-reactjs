import axios from "axios";
import cookie from "js-cookie";

var instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
});
//instance.defaults.headers.common['Authorization'] = cookie.get('token')

export default instance;