import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse } from "../../interface/AuthResponse";
import axios from "axios";
import AuthService from "../../services/AuthService/AuthService";

interface IInitialState {
    isAuth: boolean
    loadingStatus: boolean;
    errorStatus: boolean;
}

const initialState: IInitialState = {
    isAuth: false,
    loadingStatus: false,
    errorStatus: false
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: {email: string, password: string}) => {        
        return await AuthService.login(email, password)
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async () => {
        return await axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/api/auth/refresh-token`, {}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('refresh')}`,
            },
        })
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        // return await AuthService.logout()
        return ''
    }
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        setAuth: (state, {payload}: {payload: boolean}) => {
            state.isAuth = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loadingStatus = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                localStorage.setItem('token', action.payload.data.access_token)
                localStorage.setItem('refresh', action.payload.data.refresh_token)
                state.loadingStatus = false
            })
            .addCase(login.rejected, (state) => {
                state.loadingStatus = false
                state.errorStatus = true
            })

            .addCase(checkAuth.pending, (state) => {state.loadingStatus = true})
            .addCase(checkAuth.fulfilled, (state, action) => {
                if (action.payload.data.access_token) {
                    state.isAuth = true                
                    localStorage.setItem('token', action.payload.data.access_token)
                    localStorage.setItem('refresh', action.payload.data.refresh_token)
                }
                state.loadingStatus = false
            })
            .addCase(checkAuth.rejected, (state) => {
                state.loadingStatus = false
                state.errorStatus = true
            })

            .addCase(logout.pending, (state) => {state.loadingStatus = true})
            .addCase(logout.fulfilled, (state) => {
                state.isAuth = false               
                localStorage.removeItem('token')
                localStorage.removeItem('refresh')
                state.loadingStatus = false
            })
            .addCase(logout.rejected, (state) => {
                state.loadingStatus = false
                state.errorStatus = true
            })
    }
})