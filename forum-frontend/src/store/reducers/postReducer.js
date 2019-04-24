import {FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS_ID_SUCCESS } from "../actions/postActions";

const initialState = {
    posts: [],
    postId: [],
    error: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.data
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case FETCH_POSTS_ID_SUCCESS:
            return {
                ...state,
                postId: action.data
            };
        default:
            return state;
    }
};
export default postReducer;