/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('mern11-todo');

// Search for documents in the current collection.
db.getCollection('restaurants')
    .find(
        {
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [12.912010250712447, 77.64344826768263]
                    },
                    $maxDistance: 100000
                },
            }
        }
    );
