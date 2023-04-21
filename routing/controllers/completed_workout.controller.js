const CompletedWorkout = require('../models/completed_workout.model')
const Controller = require('./index.controller');

module.exports = class extends Controller {
    constructor() {
        super("CompletedWorkout", CompletedWorkout);
    }

    store = async (req, res, next) => {
        console.log("Adding Completed Workout")

        const completed_workout = new CompletedWorkout({
            
        });

        this.add(req, res, next, completed_workout)
    }
}