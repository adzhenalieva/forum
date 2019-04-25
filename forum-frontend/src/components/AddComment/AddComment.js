import React, {Component, Fragment} from 'react';
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";
import {connect} from "react-redux";

import FormElement from "../../components/UI/Form/FormElement";
import {sendComment} from "../../store/actions/commentsActions";

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

    fieldHasError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <Fragment>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        This is a danger alert — check it out!
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement
                        propertyName="comment"
                        title="Comment"
                        type="text"
                        value={this.state.comment}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('comment')}
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