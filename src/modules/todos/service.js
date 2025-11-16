

const path = require('node:path');
const fs = require('node:fs');
const BadRequestException = require('../../exceptions/BadRequestException');
const { Todo } = require('./model');
const todosFilePath = path.join(__dirname, 'todos.json');

async function createTodo({ todo, userId }) {
    // const data = getTodos();
    const newTodo = new Todo({
        todo,
        createdBy: userId,
    });

    await newTodo.save();
    // data.push(newTodo);
    // fs.writeFileSync(todosFilePath, JSON.stringify(data, null, 2));
    return newTodo;
}


async function getTodos(userId, page = 0, limit = 4) {
    if (typeof page !== 'number') {
        page = Number(page);
    }

    if (typeof limit !== 'number') {
        limit = Number(limit);
    }

    if (isNaN(page) || isNaN(limit)) {
        throw new BadRequestException('Page and limit must be numbers');
    }

    const todos = await Todo.find({ createdBy: userId })
        .skip(page * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
    return todos;
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