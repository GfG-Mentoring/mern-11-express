const express = require('express')

const { todoRouter } = require('./src/modules/todos/routes');
const { authRouter } = require('./src/modules/auth/routes');

const app = express();

// to parse the body of the request
app.use(express.json());

const port = process.env.PORT || 8003;


app.get('/', (req, res) => {
    res.send();
});

// localhost:8003/todos  ->  /
app.use('/todos', todoRouter);

app.use('/auth', authRouter);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
})
