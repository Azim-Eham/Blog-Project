import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,

    reducers:{
        addPost: (state, action) =>{
            state.posts.push(action.payload);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },

        updatePost: (state, action) =>{
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            state.posts[index] = action.payload;
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },

        deletePost: (state, action) =>{
            state.posts = state.posts.filter(p => p.id !== action.payload);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        }
    }
})

export const {addPost, updatePost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;