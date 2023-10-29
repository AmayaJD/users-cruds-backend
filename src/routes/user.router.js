const { getAll, create, getUser, getDelete, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") // users
        .get(getAll)
        .post(create);

userRouter.route("/:id")
        .get(getUser) // users
        .delete(getDelete)
        .put(update)

module.exports = userRouter;