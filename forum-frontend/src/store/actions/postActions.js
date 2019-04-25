import axios from "../../axios-api";
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_POSTS_ID_SUCCESS = "FETCH_POSTS_ID_SUCCESS";
export const SEND_POST_SUCCESS = 'SEND_POST_SUCCESS';
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";

const fetchPostsSuccess = data => ({type: FETCH_POSTS_SUCCESS, data});

const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, error});

const fetchPostsIdSuccess = data => ({type: FETCH_POSTS_ID_SUCCESS, data});

const sendPostsSuccess = () => ({type: SEND_POST_SUCCESS});

const sendPostsFailure = error => ({type: SEND_POST_FAILURE, error});

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(
            response => {
                dispatch(fetchPostsSuccess(response.data));
            },
            error => {
                dispatch(fetchPostsFailure(error));
            }
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


export const sendPost = postData => {
    return (dispatch, getState) => {
        let token = getState().user.user.token;
        const header = {headers: {'Authorization': token}};
        return axios.post('/posts', postData, header).then(
            (response) => {
                dispatch(sendPostsSuccess());
                NotificationManager.success('Posted successfully');
                dispatch(push('/'));
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendPostsFailure(error.response.data));
                    NotificationManager.error('Error');
                } else {
                    dispatch(sendPostsFailure({global: 'No connection'}))
                }

            }
        )
    }
};