import React from 'react';
import {Col, Row, Card, CardBody, CardTitle, Button} from "reactstrap";

import PostsThumbnail from "../PostsThumbnail/PostsThumbnail";

const Posts = props => {
    return (
        <Row>
            <Col xs="6">
                <Card color="info" className="mb-5">
                    <CardBody>
                        <PostsThumbnail image={props.image}/>
                        <p><strong>Date: </strong>{props.datetime}</p>
                       <p><strong>Title: </strong>{props.title}</p>
                        <CardTitle><strong>{props.user}</strong></CardTitle>
                        <Button color="primary" onClick={props.onClick}>More...</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Posts;