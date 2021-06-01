import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../../firebase'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'

export const getMessagesAsync = createAsyncThunk(
    'chat/getMessages',
    async () => {
        var data = []
        var query = db.collection('messages')
            .orderBy('timestamp', 'desc')
        query.onSnapshot(snapshot => {
           snapshot.docs.map(doc => {
               console.log(doc.data())
               return query
           })
        })
    }
)
export const sendMessageAsync = createAsyncThunk(
    'chat/sendMessage',
    async ({ message, authState }) => {

        console.log(message)
        console.log(authState)
        db.collection('messages').add({
            // name: payload.userName,
            name: authState.userName,
            text: message,
            profilePicUrl: authState.profilePicUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(error => console.error(error))
            .then(() => {
                console.log('Document success')
            })
        return message
    }
)
const initialState = {
    messages: [],
    status: 'idle',
    user: '',
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {

    },
    extraReducers: {
        [sendMessageAsync.pending]: (state, action) => {
            state.status = 'loading'
        },
        [sendMessageAsync.fulfilled]: (state, action) => {
            state.status = 'success'
        },
        [sendMessageAsync.rejected]: (state) => {
            state.status = 'failed'
        },
        [getMessagesAsync.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getMessagesAsync.fulfilled]: (state, action) => {
            const { payload } = action
            // console.log(payload.message)
            // state.message.push(payload)
            console.log('getMessagesAsync:', 'action.payload.messages')
        },
        [getMessagesAsync.rejected]: (state) => {
            state.status = 'failed'
        }
    }
});

export const {
    create
} = chatSlice.actions
export default chatSlice.reducer