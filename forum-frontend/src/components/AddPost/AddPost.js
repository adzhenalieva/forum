import React, {Component, Fragment} from 'react';
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";
import {connect} from "react-redux";

import FormElement from "../../components/UI/Form/FormElement";
import {sendPost} from "../../store/actions/postActions";


class AddPost extends Component {
    state = {
        title: '',
        description: '',
        image: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.sendPost(formData);
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })

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
                    <h2>Create new post</h2>
                    <FormElement
                        propertyName="title"
                        title="Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('title')}
                        placeholder="Title of the post"
                    />
                    <FormElement
                        propertyName="description"
                        title="Post description"
                        type="text"
                        value={this.state.description}
                        onChange={this.inputChangeHandler}
                        error={this.fieldHasError('description')}
                        placeholder="Enter post description"
                    />
                    <FormElement
                        propertyName="image"
                        title="Image"
                        type="file"
                        onChange={this.fileChangeHandler}
                        error={this.fieldHasError('image')}
                        />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}/>
                        <Button type="submit" color="primary">Send post</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.post.error
});

const mapDispatchToProps = dispatch => ({
    sendPost: data => dispatch(sendPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);