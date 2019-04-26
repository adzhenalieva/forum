import {
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_SUCCESS,
    SEND_COMMENTS_FAILURE,
    SEND_COMMENTS_SUCCESS
} from "../actions/commentsActions";


const initialState = {
    comments: [],
    error: null

};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.data,
                error: null
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case SEND_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.error + '. Field comment is required.'
            };
        case SEND_COMMENTS_SUCCESS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
export default commentsReducer;