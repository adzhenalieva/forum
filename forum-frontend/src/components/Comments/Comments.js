import React from 'react';

const Comments = props => {
    return (
        <div>
            <p>{props.text}</p>
            <p>{props.user}</p>
        </div>
    );
};

export default Comments;