import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInWithGoogle } from '../firebase';

const initialState = {
    user: null,
    status: 'idle',
}
// 41:42
export const signInWithGoogleAsync = createAsyncThunk(
    'auth/signInWithGoogle',
    async () => {
      signInWithGoogle()
    }
)
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInWithGoogleAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
});

export const {
    login, logout
} = authSlice.actions
export const selectUser = (state) => state.auth.user
export const selectAuthStatus = (state) => state.auth.status
export default authSlice.reducer