import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import base64 from 'base-64';
import { axiosPrivate }  from "../../api/config";

const initialState = {
    loggedUser: null,
    isLoggedIn: false,
    isLoading: true,
    errMsg: ''
};

export const silentLogin = createAsyncThunk('user/silentLogin',
    async () => {
        const user = await axiosPrivate.post(`/silent`);
        return user.data;
    });

export const logout = createAsyncThunk('user/logout',
    async () => {
        await axiosPrivate.delete(`/signout`);
        return null;
    }
);

export const signIn = createAsyncThunk('user/signIn',
    async (data) => {
        const { email, password } = data;
        const encodedData = base64.encode(`${email}:${password}`);
        const res = await axiosPrivate.post(`/signin`, {}, { headers: { Authorization: `Basic ${encodedData}` } });
        console.log('Comes from signIn: ',res.data);
        return res.data;
    }
);

export const signUp = createAsyncThunk('user/signUp',
    async (data) => {
        const res = await axiosPrivate.post(`/signup`, data);
        console.log(res.data);
        return res.data;
    });


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(silentLogin.fulfilled, (state, action) => {
                state.loggedUser = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(silentLogin.rejected, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(logout.fulfilled, (state, action) => {
                const newState = {
                    ...initialState,
                    isLoading: false
                };
                return newState;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loggedUser = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loggedUser = action.payload;
                state.isLoggedIn = true;
                state.errMsg = '';
            })
            .addCase(signIn.rejected,(state, action) => {
                console.log(action.error);
                state.errMsg = action.error ;
            });
    }
});


export const selectUserState = (state) => state.user;


export default userSlice.reducer;