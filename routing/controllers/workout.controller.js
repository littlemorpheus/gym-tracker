const { model } = require('mongoose');
const Workout = require('../models/workout.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Workout", Workout);
    }

    add = async (req, res, next) => {
        let workout = new Workout({
            name: req.body.name,
            sections: req.body.sections
        });
        this.add_one(req, res, next, workout)
    }

    getByFilter = (req, res, next) => {
        /*
        Need to properly look into fomratting a backend
        For now just doing a temp solution where can specficy field of child
        */
        console.log(req.query)

        let field = req.query.field

        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id})
        .lean()
        .populate({
            //Solution for Array of elements
            path: 'sections',
            populate: {
                /* This is removing the attached Key */
                path: 'variations.value',
                model: 'Exercise'
            }
        })
        .exec(function(err, item) {
            console.log(`Getting all ${element_name}`);
            console.log(item)
            res.json(item);
        })
    };

    getAllByFilter = (req, res, next) => {
        /*
        Need to properly look into fomratting a backend
        For now just doing a temp solution where can specficy field of child
        */
        console.log(req.query)

        let field = req.query.field 

        let element_name = this.element_name
        this._MODEL.find().lean().populate('sections', field).exec(function(err, item) {
            console.log(`Getting all ${element_name}`);
            res.json(item);
        })
    };

    get1 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'sections',
            model: 'Workout Child'
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name} 1`);
            console.log("ITEM: " + item);
            res.json(item);
        })
    };

    get2 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'sections',
            populate: {
                /* This is removing the attached Key */
                path: 'variations.value',
                model: 'Exercise'
            }
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name} 2`);
            console.log("ITEM: " + item);
            console.log("Sections: " + item.sections);
            console.log("Variations 0: " + item.sections[0].variations);
            res.json(item);
        })
    };
}