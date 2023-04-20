const WO_Diary = require('../models/workout_diary.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Workout_Diary", WO_Diary);
    }

    add = async (req, res, next) => {
        let wo_diary = new WO_Diary({
            workout_plan: req.body.workout_plan,
            sections: req.body.sections,
            notes: req.body.notes,
            //user_id: req.body.user_id
        });
        console.log(wo_diary);
        this.add_one(req, res, next, wo_diary)
    }
}