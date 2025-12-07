
const mongoose = require('mongoose');
const { Review, reviewSchema } = require('./reviews.model');

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const cuisineSchema = new mongoose.Schema({
    cuisineName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    address: addressSchema,
    cuisine: {
        type: [cuisineSchema],
        required: true,
    },
    averagePrice: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: [reviewSchema],
        ref: Review,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    }
}, {
    timestamps: true,
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

module.exports = { Restaurant };