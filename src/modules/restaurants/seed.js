const { default: mongoose } = require('mongoose');
const { Restaurant } = require('./models/restaurant.model');

const restaurants = [
    {
        restaurantName: "The Spice Garden",
        address: {
            street: "123 Main Street",
            city: "Mumbai",
            state: "Maharashtra",
            zip: "400001",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Butter Chicken",
                category: "North Indian",
                description: "Creamy tomato-based curry with tender chicken pieces",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400"
            },
            {
                cuisineName: "Paneer Tikka",
                category: "North Indian",
                description: "Grilled cottage cheese marinated in spices",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400"
            }
        ],
        averagePrice: 800,
        averageRating: 4.5,
        reviews: [
            {
                rating: 4.5,
                comment: "Great food and service",
                createdBy: "666666666666666666666666",
            }
        ],
        location: {
            type: "Point",
            coordinates: [72.8777, 19.0760]
        }

    },
    {
        restaurantName: "Dragon Palace",
        address: {
            street: "45 Park Avenue",
            city: "Delhi",
            state: "Delhi",
            zip: "110001",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Kung Pao Chicken",
                category: "Chinese",
                description: "Spicy stir-fried chicken with peanuts and vegetables",
                image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400"
            },
            {
                cuisineName: "Dim Sum Platter",
                category: "Chinese",
                description: "Assorted steamed dumplings with dipping sauces",
                image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"
            }
        ],
        averagePrice: 1200,
        averageRating: 4.3,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [77.2090, 28.6139]
        }
    },
    {
        restaurantName: "Sakura Sushi",
        address: {
            street: "78 MG Road",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560001",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Dragon Roll",
                category: "Japanese",
                description: "Sushi roll with eel, avocado and cucumber",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400"
            },
            {
                cuisineName: "Ramen Bowl",
                category: "Japanese",
                description: "Rich pork broth with noodles, egg and chashu",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
            }
        ],
        averagePrice: 1500,
        averageRating: 4.7,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [13.006070, 77.537513]
        }
    },
    {
        restaurantName: "Bella Italia",
        address: {
            street: "22 Brigade Road",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560025",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Margherita Pizza",
                category: "Italian",
                description: "Classic pizza with fresh mozzarella and basil",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400"
            },
            {
                cuisineName: "Fettuccine Alfredo",
                category: "Italian",
                description: "Creamy pasta with parmesan cheese sauce",
                image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400"
            }
        ],
        averagePrice: 1100,
        averageRating: 4.4,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [12.995854, 77.606711]
        }
    },
    {
        restaurantName: "Mumbai Masala",
        address: {
            street: "56 Linking Road",
            city: "Mumbai",
            state: "Maharashtra",
            zip: "400050",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Vada Pav",
                category: "Street Food",
                description: "Spiced potato fritter in a bun with chutneys",
                image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400"
            },
            {
                cuisineName: "Pav Bhaji",
                category: "Street Food",
                description: "Mashed vegetable curry served with buttered bread",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400"
            }
        ],
        averagePrice: 300,
        averageRating: 4.6,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [72.8296, 19.0596]
        }
    },
    {
        restaurantName: "Thai Orchid",
        address: {
            street: "89 Anna Salai",
            city: "Chennai",
            state: "Tamil Nadu",
            zip: "600002",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Pad Thai",
                category: "Thai",
                description: "Stir-fried rice noodles with shrimp and peanuts",
                image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400"
            },
            {
                cuisineName: "Green Curry",
                category: "Thai",
                description: "Aromatic coconut curry with vegetables and basil",
                image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400"
            }
        ],
        averagePrice: 900,
        averageRating: 4.2,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [12.943860, 77.606012]
        }
    },
    {
        restaurantName: "The Kebab Factory",
        address: {
            street: "34 Connaught Place",
            city: "Delhi",
            state: "Delhi",
            zip: "110001",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Galouti Kebab",
                category: "Mughlai",
                description: "Melt-in-mouth minced lamb kebabs with aromatic spices",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400"
            },
            {
                cuisineName: "Seekh Kebab",
                category: "Mughlai",
                description: "Spiced minced meat skewers grilled to perfection",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400"
            }
        ],
        averagePrice: 1400,
        averageRating: 4.8,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [77.2195, 28.6328]
        }
    },
    {
        restaurantName: "South Flavors",
        address: {
            street: "12 T Nagar",
            city: "Chennai",
            state: "Tamil Nadu",
            zip: "600017",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Masala Dosa",
                category: "South Indian",
                description: "Crispy rice crepe filled with spiced potato",
                image: "https://images.unsplash.com/photo-1668236543090-82eb5eaf701b?w=400"
            },
            {
                cuisineName: "Chettinad Chicken",
                category: "South Indian",
                description: "Fiery chicken curry with freshly ground spices",
                image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400"
            }
        ],
        averagePrice: 500,
        averageRating: 4.5,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [80.2339, 13.0418]
        }
    },
    {
        restaurantName: "Biryani House",
        address: {
            street: "67 Jubilee Hills",
            city: "Hyderabad",
            state: "Telangana",
            zip: "500033",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Hyderabadi Dum Biryani",
                category: "Hyderabadi",
                description: "Slow-cooked layered rice with tender meat and saffron",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
            },
            {
                cuisineName: "Haleem",
                category: "Hyderabadi",
                description: "Rich meat and lentil stew slow-cooked for hours",
                image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400"
            }
        ],
        averagePrice: 600,
        averageRating: 4.9,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [78.4067, 17.4326]
        }
    },
    {
        restaurantName: "Café Parisien",
        address: {
            street: "101 FC Road",
            city: "Pune",
            state: "Maharashtra",
            zip: "411004",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Croissant",
                category: "French",
                description: "Buttery flaky pastry served with jam and butter",
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
            },
            {
                cuisineName: "French Onion Soup",
                category: "French",
                description: "Rich beef broth with caramelized onions and gruyère",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400"
            }
        ],
        averagePrice: 700,
        averageRating: 4.1,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [73.8478, 18.5314]
        }
    },
    {
        restaurantName: "Taco Loco",
        address: {
            street: "33 Bandra West",
            city: "Mumbai",
            state: "Maharashtra",
            zip: "400050",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Chicken Tacos",
                category: "Mexican",
                description: "Soft corn tortillas with grilled chicken and salsa",
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
            },
            {
                cuisineName: "Burrito Bowl",
                category: "Mexican",
                description: "Rice bowl with beans, meat, guacamole and sour cream",
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400"
            }
        ],
        averagePrice: 650,
        averageRating: 4.3,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [72.8361, 19.0544]
        }
    },
    {
        restaurantName: "Punjab Grill",
        address: {
            street: "44 Sector 17",
            city: "Chandigarh",
            state: "Chandigarh",
            zip: "160017",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Dal Makhani",
                category: "Punjabi",
                description: "Creamy black lentils slow-cooked with butter and cream",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400"
            },
            {
                cuisineName: "Amritsari Kulcha",
                category: "Punjabi",
                description: "Stuffed bread with spiced potato filling",
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400"
            }
        ],
        averagePrice: 750,
        averageRating: 4.6,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [76.7794, 30.7333]
        }
    },
    {
        restaurantName: "Coastal Kitchen",
        address: {
            street: "88 Marine Drive",
            city: "Kochi",
            state: "Kerala",
            zip: "682001",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Kerala Fish Curry",
                category: "Kerala",
                description: "Tangy coconut-based fish curry with raw mango",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400"
            },
            {
                cuisineName: "Appam with Stew",
                category: "Kerala",
                description: "Lacy rice pancakes with coconut vegetable stew",
                image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400"
            }
        ],
        averagePrice: 550,
        averageRating: 4.4,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [76.2673, 9.9312]
        }
    },
    {
        restaurantName: "BBQ Nation",
        address: {
            street: "55 Koramangala",
            city: "Bangalore",
            state: "Karnataka",
            zip: "560034",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Grilled Prawns",
                category: "BBQ",
                description: "Jumbo prawns marinated and grilled on live grill",
                image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400"
            },
            {
                cuisineName: "Cajun Spiced Potato",
                category: "BBQ",
                description: "Crispy potatoes with cajun seasoning",
                image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=400"
            }
        ],
        averagePrice: 1300,
        averageRating: 4.2,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [77.6245, 12.9352]
        }
    },
    {
        restaurantName: "Kolkata Kitchen",
        address: {
            street: "29 Park Street",
            city: "Kolkata",
            state: "West Bengal",
            zip: "700016",
            country: "India"
        },
        cuisine: [
            {
                cuisineName: "Kosha Mangsho",
                category: "Bengali",
                description: "Slow-cooked spicy mutton curry with rich gravy",
                image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400"
            },
            {
                cuisineName: "Mishti Doi",
                category: "Bengali",
                description: "Traditional sweet yogurt made with jaggery",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
            }
        ],
        averagePrice: 450,
        averageRating: 4.5,
        reviews: [],
        location: {
            type: "Point",
            coordinates: [88.3629, 22.5626]
        }
    }
];

async function seedRestaurants(forceReseed = false) {
    try {
        const count = await Restaurant.countDocuments();

        if (count > 0 && !forceReseed) {
            console.log('🌱 Restaurants already present. Not seeding again.');
            return;
        }

        if (count > 0 && forceReseed) {
            // Drop existing indexes and documents for fresh start
            console.log('🗑️  Dropping existing indexes and documents...');
            await Restaurant.collection.dropIndexes();
            await Restaurant.deleteMany({});
        }

        // Insert new restaurants
        const result = await Restaurant.insertMany(restaurants);
        // const result = await Restaurant.insertMany(restaurants);
        console.log(`🌱 Successfully seeded ${result.length} restaurants`);

        // Ensure the 2dsphere index is created
        await Restaurant.collection.createIndex({ location: '2dsphere' });
        console.log('📍 Created geospatial index');

        console.log('\n📋 Seeded restaurants:');
        result.forEach((restaurant, index) => {
            console.log(`   ${index + 1}. ${restaurant.restaurantName} - ${restaurant.address.city}`);
        });

    } catch (error) {
        console.error('❌ Error seeding restaurants:', error);
    }
}


module.exports = { seedRestaurants };