import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import authReducer from './authSlice';
import searchReducer from './searchSlice';


const store = configureStore({
    reducer:{
        posts: postsReducer,
        auth: authReducer,
        search: searchReducer,
    },
})

export default store;