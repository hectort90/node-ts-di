import 'reflect-metadata';

import express from 'express';
import Container from 'typedi';
import UserController from './controllers/UserController';
const main = async () => {
    const app = express();
    const port = 3000;
    const userController = Container.get(UserController);
    app.get('/users', (req, res) => userController.getAllUsers(req, res));
    app.post('/users', (req, res) => userController.insertUser(req, res));

    app.listen(port, () => {
        console.log('Server started at port ', port);
    });
}

main().catch(err => {
    console.error(err);
});