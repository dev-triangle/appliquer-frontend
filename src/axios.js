import axios from "axios";
import baseUrl from "./utils/urls";

const axiosInstance= axios.create({
    baseUrl: baseUrl,
    timeout:5000,
    headers:{
        Authorization: localStorage.getItem('access_token')
                   ? 'Bearer ' + localStorage.getItem('access_token')
                   : null,
               'content-Type': 'application/json',
               accept:'application/json'    
            
    }
})

export default axiosInstance