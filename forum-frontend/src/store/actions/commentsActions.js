import axios from "../../axios-api";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = "FETCH_POSTS_FAILURE";


const fetchCommentsSuccess = data => ({type: FETCH_COMMENTS_SUCCESS, data});

const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});



export const fetchComments = id => {
    return dispatch => {
        return axios.get('/comments/' + id).then(
            response => dispatch(fetchCommentsSuccess(response.data)),
            error => dispatch(fetchCommentsFailure(error))
        );
    };
};

