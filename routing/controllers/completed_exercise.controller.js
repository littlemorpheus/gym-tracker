const CompletedExercise = require('../models/completed_exercise.model')
const Controller = require('./index.controller');

module.exports = class extends Controller {
    constructor() {
        super("CompletedExercise", CompletedExercise);
    }

    store = async (req, res, next) => {
        console.log("Adding Completed Exercise")

        const completed_exercise = new CompletedSet({
            order: req.body.order,
        });

        this.add(req, res, next, completed_exercise)
    }
}