import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    admin: null,
}
// 3 16 48
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
    }
});

export const {
    login, logout
} = authSlice.actions
// selectors
export const selectUser = (state) => state.auth.user
// state.user(initialState).user(userObject)
export default authSlice.reducer