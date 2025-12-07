const mongoose = require('mongoose');

async function connectDB() {

    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const cluster = process.env.MONGODB_CLUSTER;
    const dbName = process.env.MONGODB_NAME;

    if (!user || !password || !cluster || !dbName) {
        throw new Error('MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER and MONGODB_NAME are required');
    }

    // mongodb+srv://<db_username>:<db_password>@gfg-mern6.giwmv.mongodb.net/
    const uri = `mongodb+srv://${user}:${password}@${cluster}.giwmv.mongodb.net/${dbName}`;

    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to connect to MongoDB');
    }
}

module.exports = { connectDB };