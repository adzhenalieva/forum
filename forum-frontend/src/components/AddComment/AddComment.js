import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";

import {sendComment} from "../../store/actions/commentsActions";

import FormElement from "../../components/UI/Form/FormElement";


class AddComment extends Component {
    
    state = {
        comment: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.sendComment({...this.state});
        this.setState({comment: ''});
    };


    render() {
        return (
            <Fragment>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        Check internet connection
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement
                        propertyName="comment"
                        title="Comment"
                        type="text"
                        value={this.state.comment}
                        onChange={this.inputChangeHandler}
                        error={this.props.error}
                        placeholder="Leave your comment"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}/>
                        <Button type="submit" color="primary">Send</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.comments.error
});

const mapDispatchToProps = dispatch => ({
    sendComment: data => dispatch(sendComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);