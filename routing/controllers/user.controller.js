const User = require('../models/user.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("User", User);
    }

    store = async (req, res, next) => {
        let user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password /* TODO: Hash password */
        });
        this.add(req, res, next, user)
    }
}