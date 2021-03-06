import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchPostsId} from "../../store/actions/postActions";
import {fetchComments} from "../../store/actions/commentsActions";

import Comments from "../../components/Comments/Comments";
import AddComment from "../../components/AddComment/AddComment";
import PostByIdItem from "../../components/PostByIdItem/PostByIdItem";

class PostById extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPostsId(id);
        this.props.fetchComments(id);
    }

    dateFormat = date => {
        let d = new Date(date);
        return d.toLocaleDateString('ru-GB') + '  ' + d.toLocaleTimeString();
    };

    render() {
        let post = null;
        if (this.props.postId && this.props.postId.user) {
            post = <PostByIdItem
                image={this.props.postId.image}
                datetime={this.dateFormat(this.props.postId.datetime)}
                user={this.props.postId.user.username}
                description={this.props.postId.description}
                title={this.props.postId.title}
            />;
        } else {
            post = <p>Loading</p>;
        }
        return (
            <Fragment>
                <h1>Post</h1>
                {post}
                {this.props.comments.map(comment => (
                    <Comments
                        key={comment._id}
                        user={comment.user.username}
                        datetime={this.dateFormat(comment.datetime)}
                        comment={comment.comment}
                        onClick={() => this.getPost(post._id)}/>
                ))}
                {this.props.user ?  <AddComment/> : <h3>You should login to be able to leave comments</h3> }

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        postId: state.post.postId,
        comments: state.comments.comments,
        user: state.user.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPostsId: id => dispatch(fetchPostsId(id)),
        fetchComments: id => dispatch(fetchComments(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostById);