const express = require('express')

const { connectDB } = require('./src/utils/db');
const { todoRouter } = require('./src/modules/todos/routes');
const { authRouter } = require('./src/modules/auth/routes');
const cors = require('cors');
const authMiddleware = require('./src/middlewares/auth');
const { seedRestaurants } = require('./src/modules/restaurants/seed');
const { restaurantRouter } = require('./src/modules/restaurants/routes');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
// to parse the body of the request
app.use(express.json());

const port = process.env.PORT || 8003;


app.get('/', (req, res) => {
    res.send();
});

// localhost:8003/todos  ->  /
app.use('/todos',
    authMiddleware,
    todoRouter);


app.use('/restaurants', restaurantRouter);
app.use('/auth', authRouter);


async function startServer() {
    await connectDB();
    console.log('Connected to Database. All Good!');


    await seedRestaurants();

    app.listen(port, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server is running on port ${port}`);
        }
    })

}

startServer();