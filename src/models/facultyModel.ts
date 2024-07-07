import mongoose from 'mongoose'
const facSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
course:{
    type:String,
    required:true
},
isFaculty:{
    type:Boolean,
    default:true
},
section:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true   },
dob:{
        type:Date,
        required:true,
    default:Date.now},
tId:{
    type:Number,
    required:true,
},
subject:{
    type:String,
    required:true
},

},{timestamps:true})

export default mongoose.models.student || mongoose.model('faculty',facSchema)