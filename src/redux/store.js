import { configureStore } from '@reduxjs/toolkit';
import reducer from './bookslice';
import login from './login'

const store = configureStore({
    reducer: {
        books: reducer,
        login:login
    }
})
export default store;