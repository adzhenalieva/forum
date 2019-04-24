import React from "react";
import {apiURL} from "../../constants";


const styles = {
    width: '150px',
    height: '150px',
    marginBottom: '20px'
};

const PostsThumbnail = props => {

    let image = null;

    if (props.image) {
        image = apiURL + '/upload/' + props.image;
        return <img src={image} style={styles} className="img-thumbnail" alt="newsImage" />
    }
    return null;

};

export default PostsThumbnail;