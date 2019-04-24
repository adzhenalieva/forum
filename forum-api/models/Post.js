const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        String,
        required: function () {
            return this.image === null;
        }
    },
    image: {
        String,
        required: function () {
            return this.description === null;
        }
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;