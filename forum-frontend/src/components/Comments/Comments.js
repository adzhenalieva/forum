import React from 'react';
import {Card} from "reactstrap";

const Comments = props => {
    return (
        <Card className="mb-5" style={{'padding': '20px'}}>
            <i className="mb-3">{props.comment}</i>
            <p>by <strong>{props.user}</strong> at {props.datetime}</p>
        </Card>
    );
};

export default Comments;