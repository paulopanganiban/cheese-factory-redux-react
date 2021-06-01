import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todoSlice'
import authReducer from '../features/auth/authSlice'
import chatReducer from '../features/chat/chatSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    auth: authReducer,
    chat: chatReducer,
  },
});
