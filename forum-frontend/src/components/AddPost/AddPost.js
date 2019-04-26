import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button, Alert} from "reactstrap";

import {sendPost} from "../../store/actions/postActions";

import FormElement from "../../components/UI/Form/FormElement";



class AddPost extends Component {

    state = {
        title: '',
        description: '',
        image: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/');
        }
    }

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
                        Check the internet connection
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
                        title="Text"
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
    error: state.post.error,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    sendPost: data => dispatch(sendPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);