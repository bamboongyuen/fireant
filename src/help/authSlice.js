import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: true,
        isLogout: true,
        userToken: null,
        profile: {},
    },
    reducers: {
        login: (state, action) => {
            state.isLogout = false;
            state.userToken = action.payload.token;
            state.profile = action.payload.profile;
            console.log(action);
        },
        logout: (state) => {
            state.isLogout = true;
            state.userToken = null;
            state.profile = {};
        },
        restore: (state, action) => {
            state.isLoading = false;
            state.userToken = action.payload;
        },
    },
});

export const { login, logout, restore } = authSlice.actions;
export default authSlice.reducer;
