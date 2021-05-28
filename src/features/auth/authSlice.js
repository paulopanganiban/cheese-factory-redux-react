import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, provider } from '../../firebase'
const initialState = {
    userName: null,
    userEmail: null,
    isLoggedIn: false,
    profilePicUrl: '',
}
export const logInWithGoogleProviderAsync = createAsyncThunk(
    'auth/login',
    auth.signInWithPopup(provider)
)
export const logOutAsync = createAsyncThunk(
    'auth/logout',
    auth.signOut()
)
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
     login: (state, action) => {
         const { payload } = action
         state.isLoggedIn = true
         state.userName = payload.displayName
         state.userEmail = payload.email
         console.log(action.payload + state.isLoggedIn)

     },
     logout: (state) => {
         auth.signOut()
         state.userName = null
         state.userEmail = null
         state.isLoggedIn = false
     }
    }
});

export const {
    login, logout
} = authSlice.actions
export default authSlice.reducer