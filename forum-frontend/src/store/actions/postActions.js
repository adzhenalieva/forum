import axios from "../../axios-api";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_POSTS_ID_SUCCESS = "FETCH_POSTS_ID_SUCCESS";

const fetchPostsSuccess = data => ({type: FETCH_POSTS_SUCCESS, data});

const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, error});

const fetchPostsIdSuccess = data => ({type: FETCH_POSTS_ID_SUCCESS, data});

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(
            response => dispatch(fetchPostsSuccess(response.data)),
            error => dispatch(fetchPostsFailure(error))
        );
    };
};

export const fetchPostsId = id => {
    return dispatch => {
        return axios.get('/posts/' + id).then(
            response => dispatch(fetchPostsIdSuccess(response.data)),
            error => dispatch(fetchPostsFailure(error))
        );
    };
};