const mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    breakfast: String,
    lunch: String,
    dinner: String,
    addBreakfast:String,
    addLunch:String,
    addDinner:String,
    exercise:String
})

module.exports = mongoose.model('Person', personSchema);
