const mongoose=require('mongoose')
const mongooseDelete=require('mongoose-delete')
const Schema=mongoose.Schema

// define model
// dùng mongoose định nghĩa cái form cho document
const Course=new Schema({
   name: {type:String,maxLength:255},
   description : {type:String},
   image: {type:String},
   videoid:{type:String},
   level:{type:String},
   slug:{type:String, unique:true}
   // mongoose slug generator sẽ tự động tạo slug từ name của Course
})

Course.plugin(mongooseDelete,{overrideMethods:'all'})
module.exports=mongoose.model('Course',Course)
