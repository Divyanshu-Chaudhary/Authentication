const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{required:true, type:String},
    email:{required:true, type:String, unique:true},
    password:{required:true, type:String},
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
        default: 'student'
    },
    phone: String,
    department: String,
    rollNumber: String
},
{timestamps:true});

module.exports = mongoose.model('User', userSchema);