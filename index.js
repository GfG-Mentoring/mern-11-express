const express = require('express')

const { connectDB } = require('./src/utils/db');
const { todoRouter } = require('./src/modules/todos/routes');
const { authRouter } = require('./src/modules/auth/routes');
const authMiddleware = require('./src/middlewares/auth');


const app = express();

// to parse the body of the request
app.use(express.json());

const port = process.env.PORT || 8003;


app.get('/', (req, res) => {
    res.send();
});

// localhost:8003/todos  ->  /
app.use('/todos', authMiddleware, todoRouter);

app.use('/auth', authRouter);


async function startServer() {
    await connectDB();
    console.log('Connected to Database. All Good!');
    app.listen(port, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Server is running on port ${port}`);
        }
    })

}

startServer();