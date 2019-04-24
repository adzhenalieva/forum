import React from 'react';
import {Card} from "reactstrap";

const Comments = props => {
    return (
        <Card className="mb-5" style={{'padding': '20px'}}>
            <i className="mb-3">{props.comment}</i>
            <p>Author: <strong>{props.user}</strong></p>
        </Card>
    );
};

export default Comments;