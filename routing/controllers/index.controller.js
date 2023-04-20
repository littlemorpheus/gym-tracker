const mongoose = require('mongoose');

module.exports = class {
    constructor (name, model, model1=null, model2=null) {
        this.element_name = name;
        this._MODEL = model;
        this._MODEL1 = model1;
        this._MODEL2 = model2;
        console.log(this.element_name)
    };

    add_one = async (req, res, next, entry) => {
        /*
            Still some heavy confusion over extending functions
            So changed the name so instead of extending
            Im calling a seprate function
        */
        console.log(`Adding New ${this.element_name}`);
        
        entry.save((err, doc) => {
            if (err) {
                console.log(`Failed to add a ${this.element_name}\n` +err)
                res.json({err: "Failed to make connection",})
            } else {
                res.json({msg: `${this.element_name} added`})
            }
        });
    };

    get = (req, res, next) => {
        console.log(req.query)
        let element_name = this.element_name
        this._MODEL.findById({_id: req.params.id}, function(err, item) {
            console.log(`Getting specfic ${element_name}`);
            res.json(item);
        })
    };

    getAll = (req, res, next) => {
        let element_name = this.element_name
        this._MODEL.find(function(err, item) {
            console.log(this);
            console.log(`Getting all ${element_name}`);
            res.json(item);
        })
    };

    del = (req, res, next) => {
        console.log("Deletion")
        this._MODEL.deleteOne({_id: req.params.id}, function(err, result) {
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    };
};



