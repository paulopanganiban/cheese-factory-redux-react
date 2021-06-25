import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/authSlice'
// import crudReducer from '../features/crudSlice'
import counterReducer from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // auth: authReducer,
    // crud: crudReducer,
  },
});
