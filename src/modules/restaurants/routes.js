const { Router } = require('express');
const { getRestaurantsByLocation } = require('./service');


const restaurantRouter = Router();


restaurantRouter.get('/', async (req, res) => {
    const { longitude, latitude, page = 1, limit = 5 } = req.query;

    // const userId = req.user._id;
    // const userId = '66a86080f547642bc4718123';

    console.log(longitude, latitude, page, limit);

    try {
        if (!latitude || !longitude || isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
            return res.status(400).json({ message: 'Latitude and longitude are required and must be valid numbers' });
        }
        const restaurants = await getRestaurantsByLocation(parseFloat(latitude), parseFloat(longitude), page, limit);
        if (restaurants.length === 0) {
            return res.status(404).json({ message: 'No todos found' });
        }
        return res.status(200).json({ message: 'Restaurants fetched successfully', data: restaurants });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { restaurantRouter };