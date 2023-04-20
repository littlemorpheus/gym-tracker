const Exercise = require('../models/exercise.model')
const Controller = require('./index.controller');

module.exports = class extends Controller {
    constructor() {
        super("Exercise", Exercise);
    }

    store = async (req, res, next) => {
        console.log("Adding Exercise")

        const exercise = new Exercise({
            name: req.body.name,
            type: req.body.type,
            muscle: req.body.muscle,
            equipment: req.body.equipment,
            difficulty: req.body.difficulty,
            instructions: req.body.instructions
        });

        this.store(req, res, next, exercise)
    }
}