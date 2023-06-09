const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const blogSchema = new Schema({
    comment: {
        type: Text,
        required: true,

    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;