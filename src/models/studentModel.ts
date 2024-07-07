import mongoose from 'mongoose'
const stuSchema=new mongoose.Schema({
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
    default:false
},
isAdmin :{                      
    type:Boolean,
    default:false
},
section:{
    type:String,
    required:true,
    default : "A"
},
mother_name:{
    type:String,
    required:true
},
father_name:{
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
uId:{
    type:String,
    required:true,
    default:Math.random()*10+Math.random()*10,
},
subjects:[{subject_name:String,subject_code:String,heldClass:Number,attendedClass:Number}],
},{timestamps:true})

export default mongoose.models.student || mongoose.model('student',stuSchema)