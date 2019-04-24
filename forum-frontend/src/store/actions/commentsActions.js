import axios from "../../axios-api";


export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = "FETCH_POSTS_FAILURE";

export const SEND_COMMENTS_SUCCESS = "SEND_COMMENTS_SUCCESS";
export const SEND_COMMENTS_FAILURE = "SEND_COMMENTS_FAILURE";


const fetchCommentsSuccess = data => ({type: FETCH_COMMENTS_SUCCESS, data});

const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});

const sendCommentSuccess = () => ({type: SEND_COMMENTS_SUCCESS});

const sendCommentFailure = error => ({type: SEND_COMMENTS_FAILURE, error});


export const fetchComments = id => {
    return dispatch => {
        return axios.get('/comments/' + id).then(
            response => dispatch(fetchCommentsSuccess(response.data)),
            error => dispatch(fetchCommentsFailure(error))
        );
    };
};


export const sendComment = commentData => {
    return (dispatch, getState) => {
        let token = getState().user.user.token;
        commentData.post = getState().post.postId._id;

        const header = {headers: {'Authorization': token}};
        return axios.post('/comments', commentData, header).then(
            (response) => {
                dispatch(sendCommentSuccess());
                dispatch(fetchComments(commentData.post))
            },
            error => {
                if (error.response && error.response.data) {
                    dispatch(sendCommentFailure(error.response.data))
                } else {
                    dispatch(sendCommentFailure({global: 'No connection'}))
                }

            }
        )
    }
};