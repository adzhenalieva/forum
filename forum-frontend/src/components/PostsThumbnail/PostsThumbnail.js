import React from "react";
import {apiURL} from "../../constants";
import MessageImg from "../../assets/images/message.jpeg";


const styles = {
    width: '150px',
    height: '150px',
    margin: '20px',
    float: 'left'
};

const PostsThumbnail = props => {

    let image = null;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
        return <img src={image} style={styles} className="img-thumbnail" alt="postImage" />
    } else {
        return <img src={MessageImg} style={styles} className="img-thumbnail" alt="postImage" />
    }



};

export default PostsThumbnail;