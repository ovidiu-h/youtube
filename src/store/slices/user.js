import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        account: localStorage.getItem('account') || null,
    },
    reducers: {
        login: (state, actions) => {
            state.account = actions.payload;
            localStorage.setItem('account', actions.payload);
        },
        logout: (state) => {
            state.account = null;
            localStorage.removeItem('account');
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
