const { Restaurant } = require("./models/restaurant.model");


const getRestaurantsByLocation = async (latitude, longitude, page, limit) => {
    const restaurants = await Restaurant.find({
        // $or: [
        //     { restaurantName: { $regex: search, $options: 'i' } },
        //     { cuisine: { $regex: cuisine, $options: 'i' } },
        // ],
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [latitude, longitude]
                },
                $maxDistance: 100000
            },
        }
    }).skip((page - 1) * limit).limit(limit);
    return restaurants;
}

module.exports = { getRestaurantsByLocation };