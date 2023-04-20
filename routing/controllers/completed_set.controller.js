const CompletedSet = require('../models/completed_set.model')
const Controller = require('./index.controller');

module.exports = class extends Controller {
    constructor() {
        super("CompletedSet", CompletedSet);
    }

    store = async (req, res, next) => {
        console.log("Adding Completed Set")

        const completed_set = new CompletedSet({
            rep_number: req.body.rep_number,
        });

        this.store(req, res, next, completed_set)
    }
}