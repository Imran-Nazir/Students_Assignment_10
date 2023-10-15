const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type: String},
    password: {type: String},
    address: {type: String},
    roll: {type: String},
    class: {type: String}
},
{versionKey: false, timeStamps: true});

const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;