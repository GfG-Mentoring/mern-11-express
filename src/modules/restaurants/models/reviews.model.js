const mongoose = require('mongoose');
const { User } = require('../../auth/model');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
}, {
    timestamps: true,
});


const Review = mongoose.model('reviews', reviewSchema);

module.exports = { Review, reviewSchema };