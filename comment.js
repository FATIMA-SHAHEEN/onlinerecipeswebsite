const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    text: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);
