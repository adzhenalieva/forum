import React from 'react';
import {Col, Row, Card, CardBody, CardTitle} from "reactstrap";

import PostsThumbnail from "../PostsThumbnail/PostsThumbnail";

const Posts = props => {
    return (
        <Row>
            <Col xs="6">
                <Card color="info" className="mb-5">
                    <CardBody>
                        <PostsThumbnail image={props.image}/>
                        <strong>Date: </strong>{props.datetime}
                        <CardTitle><strong>{props.user}</strong></CardTitle>
                        <strong>Title: </strong>{props.title}
                        <button onClick={props.onClick}>More...</button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Posts;