const { Router } = require('express');
const BadRequestException = require('../../exceptions/BadRequestException');
const { createTodo, getTodos, updateTodo } = require('./service');

const todoRouter = Router();


todoRouter.get('/', async (req, res) => {
    const { page = 0, limit = 5 } = req.query;

    const userId = req.user._id;
    // const userId = '66a86080f547642bc4718123';

    try {
        const todos = await getTodos(userId, page, limit);
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
        console.error(error);
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

todoRouter.post('/', async (req, res) => {

    const { todo } = req.body;

    const userId = req.user._id;
    // const userId = '66a86080f547642bc4718123';

    if (!todo || !userId) {
        return res.status(400).send({
            message: 'Todo and userId are required',
        })
    }

    const newTodo = await createTodo({ todo, userId });

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