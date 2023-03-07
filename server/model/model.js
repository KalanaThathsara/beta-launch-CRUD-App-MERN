const mongoose=require('mongoose');
const { Schema } = mongoose;
const { number, String } = require('prop-types');

var schema=new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    nameInitials:{
        type: String,
        required:true
    },
    preferedName:{
        type: String,
        required:true
    },
    Gender:String,
    dob:Date,
    email:{
        type: String,
        required:true,
        unique:true
    },
    mobile:number,
    designation:String,
    employeeType:String,
    joinedDate:Date,
    experience:String,
    salary:number,
    personalNotes:String
})

const Userdb = mongoose.model('userdb', schema);

module.exports=Userdb;