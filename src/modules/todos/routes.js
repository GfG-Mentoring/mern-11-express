const { Router } = require('express');
const BadRequestException = require('../../exceptions/BadRequestException');
const { createTodo, getTodos, updateTodo } = require('./service');

const todoRouter = Router();


todoRouter.get('/', (req, res) => {
    const { page = 0, limit = 2 } = req.query;
    try {
        const todos = getTodos(page, limit);
        if (todos.length === 0) {
            return res.status(404).send({
                message: 'No todos found',
            });
        }
        return res.status(200).send({
            message: 'Todos fetched successfully',
            data: todos,
        });
    } catch (error) {
        if (error instanceof BadRequestException) {
            return res.status(error.statusCode).send({
                message: error.message,
            });
        }
        return res.status(500).send({
            message: 'Internal server error',
        });
    }

});

todoRouter.post('/', (req, res) => {

    const { todo, userId, createdAt } = req.body;

    if (!todo || !userId) {
        return res.status(400).send({
            message: 'Todo and userId are required',
        })
    }
    const parsedCreatedAt = createdAt ? new Date(createdAt) : new Date();

    const newTodo = createTodo({ todo, userId, createdAt: parsedCreatedAt });

    return res.status(201).send({
        message: 'Todo created successfully',
        data: newTodo,
    });
});


todoRouter.patch('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    if (!id) {
        return res.status(400).send({
            message: 'Id is required',
        });
    }
    if (!data) {
        return res.status(400).send({
            message: 'update request is missing body',
        });
    }

    const updatedTodo = updateTodo({ id, ...data });

    if (!updatedTodo) {
        return res.status(404).send({
            message: 'Todo not found',
        });
    }

    return res.status(200).send({
        message: 'Todo updated successfully',
        data: updatedTodo,
    });
});

module.exports = { todoRouter };