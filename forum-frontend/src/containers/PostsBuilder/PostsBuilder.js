import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/postActions";

import Posts from "../../components/Posts/Posts";


class PostsBuilder extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    getPost = id => {
        this.props.history.push({
            pathname: '/posts/' + id
        })
    };

    dateFormat = date => {
        let d = new Date(date);

        return d.toLocaleDateString('ru-GB') + '  ' + d.toLocaleTimeString();
    };

    render() {
        return (
            <Fragment>
                <h1>Posts</h1>
                {this.props.posts.map(post => (
                    <Posts
                        key={post._id}
                        datetime={this.dateFormat(post.datetime)}
                        user={post.user.username}
                        image={post.image}
                        title={post.title}
                        onClick={() => this.getPost(post._id)}/>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsBuilder);