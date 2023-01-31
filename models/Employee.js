const mongoose =require('mongoose');

const EmployeeSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
      salary:{
        type:Number,
        required:true
    }
});

module.exports = Employee = mongoose.model('employee',EmployeeSchema);