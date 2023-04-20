const WO_CHILD = require('../models/workout_child.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Workout Child", WO_CHILD);
    };

    add = async (req, res, next) => {
        let wo_child = new WO_CHILD({
            name: req.body.name,
            //--------------------------
            variations: req.body.variations,
            //-----------------------------------------
            overall_reps: req.body.overall_reps,
            minimum_reps: req.body.minimum_reps,
        });
        console.log(`Adding New Element`);
        /* It seems by defualt the map schema wants ObjectID key to be _id */

        console.log(wo_child.variations)
        console.log(req.body.variations)
        //this.test_working()
        //super.test_working()
        /*(node:25884) UnhandledPromiseRejectionWarning: TypeError: (intermediate value).test_working is not a function*/
        this.add_one(req, res, next, wo_child);
        //console.log("---------------------")
        //console.log()
        //console.log("---------------------")

        //so this async function is giving an error and im not handling that error
            //the error is that super.add isnt a function
    };

    getByFilter = (req, res, next) => {
        /*
        Need to properly look into fomratting a backend
        For now just doing a temp solution where can specficy field of child
        */
        console.log(req.query)

        let field = req.query.field 

        let element_name = this.element_name
        this._MODEL.find({_id: req.params.id}).lean().populate('variations.value', field).exec(function(err, item) {
            console.log(`Getting all ${element_name}`);
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
        this._MODEL.find().lean().populate('variations.value', field).exec(function(err, item) {
            console.log(`Getting all ${element_name}`);
            res.json(item);
        })
    };

    get1 = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}).populate({
            //Solution for Array of elements
            path: 'variations.value',
            model: 'Exercise'
        }).exec(function(err, item) {
            console.log(`Getting specfic ${element_name} 1`);
            console.log(item)
            res.json(item);
        })
    };
}