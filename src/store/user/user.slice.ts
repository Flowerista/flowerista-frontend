import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import UserService from "../../services/UserService/UserService";
import { IAddress, IChangePassword, IPersonalInfo, IUser } from "../../interface/global";

interface IInitialState {
    user:  IUser
    loadingStatus: {
        getProfile: boolean;
        changeAddress: boolean;
        changePassword: boolean;
        changePersonalInfo: boolean;
    };
    errorStatus: {
        getProfile: boolean | SerializedError;
        changeAddress: boolean | SerializedError;
        changePassword: boolean | SerializedError;
        changePersonalInfo: boolean | SerializedError;
    }
}

const initialState: IInitialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: 0,
        address: {
            city: null,
            street: null,
            house: null,
            entrance: null,
            flat: null
        }
    },
    loadingStatus: {
        getProfile: false,
        changeAddress: false,
        changePassword: false,
        changePersonalInfo: false,
    },
    errorStatus: {
        getProfile: false,
        changeAddress: false,
        changePassword: false,
        changePersonalInfo: false,
    }
}

export const getProfile = createAsyncThunk(
    'user/profile',
    async () => {        
        return await UserService.profile()
    }
)

export const changeAddress = createAsyncThunk(
    'user/changeAddress',
    async (address: IAddress) => {        
        return await UserService.changeAddress(address)
    }
)

export const changePassword = createAsyncThunk(
    'user/changePassword',
    async (passwords: IChangePassword) => {        
        return await UserService.changePassword(passwords)
    }
)

export const changePersonalInfo = createAsyncThunk(
    'user/changePersonalInfo',
    async (personalInfo: IPersonalInfo) => {        
        return await UserService.changePersonalInfo(personalInfo)
    }
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
    extraReducers: (builder) => {
        builder
            // getProfile
            .addCase(getProfile.pending, (state) => {
                state.errorStatus.getProfile = false
                state.loadingStatus.getProfile = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.user = action.payload.data
                state.loadingStatus.getProfile = false
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loadingStatus.getProfile = false
                state.errorStatus.getProfile = action.error
            })
            // changeAddress
            .addCase(changeAddress.pending, (state) => {
                state.errorStatus.changeAddress = false
                state.loadingStatus.changeAddress = true
            })
            .addCase(changeAddress.fulfilled, (state, action) => {
                state.loadingStatus.changeAddress = false
                state.user.address = action.meta.arg
            })
            .addCase(changeAddress.rejected, (state, action) => {
                state.loadingStatus.changeAddress = false
                state.errorStatus.changeAddress = action.error
            })
            //changePassword
            .addCase(changePassword.pending, (state) => {
                state.errorStatus.changePassword = false
                state.loadingStatus.changePassword = true
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loadingStatus.changePassword = false
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loadingStatus.changePassword = false
                state.errorStatus.changePassword = action.error
            })
            //changePersonalInfo
            .addCase(changePersonalInfo.pending, (state) => {
                state.errorStatus.changePersonalInfo = false
                state.loadingStatus.changePersonalInfo = true
            })
            .addCase(changePersonalInfo.fulfilled, (state, action) => {
                state.loadingStatus.changePersonalInfo = false
                state.user.firstName = action.meta.arg.firstName
                state.user.lastName = action.meta.arg.lastName
            })
            .addCase(changePersonalInfo.rejected, (state, action) => {
                state.loadingStatus.changePersonalInfo = false
                state.errorStatus.changePersonalInfo = true
            })
    }
})