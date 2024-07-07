import mongoose from 'mongoose'
const subjectSchema=new mongoose.Schema({
    subject_name:{
        type:String,
        required:true
    },
    subject_code:{
        type:String,
        required:true
    },
    
    facultiesTeaching:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'faculty',
        required:true
    }],
    noOfFaculties:{
        type:Number,
        required:true
    },
    noOfStudents:{
        type:Number,
        required:true
    },
    studentsEnrolled:[{type:mongoose.Schema.Types.ObjectId,ref:'student'}],
    credits:{
        type:Number,
        required:true
    },
},{timestamps:true})

export default mongoose.models.subject || mongoose.model('subject',subjectSchema)