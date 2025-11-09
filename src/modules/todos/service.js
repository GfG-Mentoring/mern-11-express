

const path = require('node:path');
const fs = require('node:fs');
const BadRequestException = require('../../exceptions/BadRequestException');

const todosFilePath = path.join(__dirname, 'todos.json');

function createTodo({ todo, userId, createdAt = new Date() }) {
    const data = getTodos();
    const newTodo = {
        id: data.length + 1,
        todo,
        userId,
        createdAt: createdAt.toISOString(),
    };
    data.push(newTodo);
    fs.writeFileSync(todosFilePath, JSON.stringify(data, null, 2));
    return newTodo;
}


function getTodos(page = 0, limit = 4) {
    if (typeof page !== 'number') {
        page = Number(page);
    }

    if (typeof limit !== 'number') {
        limit = Number(limit);
    }

    if (isNaN(page) || isNaN(limit)) {
        throw new BadRequestException('Page and limit must be numbers');
    }


    let data = [];
    // if file exists, read the file and parse the data
    if (fs.existsSync(todosFilePath)) {
        // reading the file
        const fileData = fs.readFileSync(todosFilePath, 'utf-8');
        // if file data is not empty, parse the data and store in the data variable
        if (fileData) {
            const existingData = JSON.parse(fileData);
            data = [...existingData];
        }
    }

    // if limit is -1, return all data
    if (limit === -1) {
        return data;
    }

    // if limit is not -1, return the data based on the page and limit
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
}

function updateTodo(data) {
    const todos = getTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === Number(data.id));

    if (todoIndex === -1) {
        return null;
    }

    // updating the todo, assured that todos will exist
    // because we have already checked that the todo exists
    todos[todoIndex].completed = data.completed || false;

    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
    return todos[todoIndex];
}


module.exports = { createTodo, getTodos, updateTodo };