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
        type: String,
        required: function () {
            return this.image === undefined;
        }
    },
    image: {
        type: String,
        required: function () {
            return this.description === undefined;
        }
    },
    datetime: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;