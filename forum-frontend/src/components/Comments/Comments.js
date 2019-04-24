import React from 'react';

const Comments = props => {
    return (
        <div>
            <p>{props.comment}</p>
            <p>{props.user}</p>
        </div>
    );
};

export default Comments;