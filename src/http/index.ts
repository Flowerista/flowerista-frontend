
import axios, { AxiosError } from "axios";
import { AuthResponse } from "../interface/AuthResponse";

const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use((config) => {
    if(localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config;
    }
    return config;
})

$api.interceptors.response.use((config) => {
    return config
}, (async (error: AxiosError) => {
    const originalRequest = error.config;
    // @ts-ignore
    if (error.response?.status == 401 && error.config && originalRequest && !error.config._isRetry) { 
        // @ts-ignore
        originalRequest._isRetry = true;
        try {
            const response = await axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/api/auth/refresh-token`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('refresh')}`,
                },
            })
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('refresh', response.data.refresh_token)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('Not authorized');
        }
    }
    throw error;
}))

export default $api;