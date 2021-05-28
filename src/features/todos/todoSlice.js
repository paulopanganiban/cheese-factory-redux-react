import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPostsAsync = createAsyncThunk(
    'posts/getPosts',
    async () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => 
            response.json())
    }
)
const initialState = {
    list: [],
    status: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    
    },
    extraReducers: {
        [getPostsAsync.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getPostsAsync.fulfilled]: (state, action) => {
            const { payload } = action
            state.list = payload
            state.status = 'success'
        },
        [getPostsAsync.rejected]: (state) => {
            state.status = 'failed'
        }
    }
});

export const {

} = todoSlice.actions
export default todoSlice.reducer