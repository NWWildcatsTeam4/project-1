const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day:{
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'please provide type of exercise'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'please provide name of exercise'
                },
                duration: {
                    type: Number,
                    required: 'please provide duration of exercise'
                },
                weight:{
                    type: Number
                },
                reps:{
                    type: Number
                },
                sets:{
                    type: Number
                },
                distance:{
                    type: Number
                }
            }
        ]
    },
    {
        toJSON:{
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) =>{
        return total+exercise.duration;
    },0);
});

const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout;