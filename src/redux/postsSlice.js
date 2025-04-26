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

        updatePost: (state, action) => {
            const { id, title, excerpt, content, thumbnail } = action.payload;
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost) {
              existingPost.title = title;
              existingPost.excerpt = excerpt;
              existingPost.content = content;
              existingPost.thumbnail = thumbnail;
              localStorage.setItem('posts', JSON.stringify(state.posts));
            }
        },

        deletePost: (state, action) =>{
            state.posts = state.posts.filter(p => p.id !== action.payload);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        }
    }
})

export const {addPost, updatePost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;