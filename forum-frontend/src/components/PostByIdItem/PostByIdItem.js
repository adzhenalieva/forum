import React from 'react';
import {Col, Row, Card, CardBody, CardTitle, CardText} from "reactstrap";

import PostsThumbnail from "../PostsThumbnail/PostsThumbnail";

const PostByIdItem = props => {
    return (
        <Row>
            <Col xs="6">
                <Card color="info" className="mb-5">
                    <CardBody>
                        <PostsThumbnail image={props.image}/>
                        <p><strong>Title: </strong>{props.title}</p>
                        <p><strong>Date: </strong>{props.datetime}</p>
                        <CardTitle><strong>{props.user}</strong></CardTitle>
                        <CardText>{props.description}</CardText>

                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default PostByIdItem;