import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: true,
        isLogout: true,
        userToken: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLogout = false;
            state.userToken = action.payload;
            console.log(action);
        },
        logout: (state, action) => {
            state.isLogout = true;
            state.userToken = null;
        },
        restore: (state, action) => {
            state.isLoading = false;
            state.userToken = action.payload;
        },
    },
});

export const { login, logout, restore } = authSlice.actions;
export default authSlice.reducer;
