const Exercise = require('../models/exercise.model')
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Exercise", Exercise);
    }

    add = async (req, res, next) => {
        console.log("Adding Exercise")
        let exercise = new Exercise({
            name: req.body.name,
            videos: req.body.videos,
            images: req.body.images
        });
        this.add_one(req, res, next, exercise)
    }
}