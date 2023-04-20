const mongoose = require('mongoose');

const workoutdiarySchema = mongoose.Schema( {
    workout_plan: { type: mongoose.Types.ObjectId, ref:'Workout', required: true },
    sections: [ {
        workout_section: {type: mongoose.Types.ObjectId, ref:'Workout Child'},
        sets: [{
            exercise: { type:mongoose.Types.ObjectId, ref:'Exercise' },
            set_index: { type:Number },
            reps: { type:Number }
        }]
    } ],
    notes: { type:String },
    user_id: { type: mongoose.Types.ObjectId /* Probs gonna keep in seprate DB so no Ref */ },

    //Record Keeping
    date: {type: Date, default: Date.now()}
});

const Workout_Diary = module.exports = mongoose.model('Workout Diary', workoutdiarySchema);