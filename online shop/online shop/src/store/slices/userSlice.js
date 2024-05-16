import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        validAccessToken: undefined,    // undefined: when we don't know if there's a valid token or not; null: if we know there is no valid token
        userDetails: null,
    },
    reducers: {
        login: (state, action) => {
            state.validAccessToken = action.payload;
        },
        logout: (state, action) => {
            state.validAccessToken = null;
            state.userDetails = null;
        },
        loadUser: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const { login, logout, loadUser } = userSlice.actions;
export default userSlice.reducer;
