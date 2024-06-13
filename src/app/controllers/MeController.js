const Course=require('../models/Course')

class MeController{
    //GET me/stored/courses
    async show(req,res,next){
        try {
            const course=await Course.find({})
            const courseObject=course.map(course=>course.toObject())
            res.render('me/stored-courses',{courseObject})
        } catch (error) {
            next(error)
        }
    }
   //GET me/stored/news
    news(req,res,next){
        res.send('Bài đăng của tôi')
    }

    //GET me/trash/courses
    async trash(req,res,next){
        try {
            const course=await Course.findDeleted({})
            const courseObject=course.map(course=>course.toObject())
            res.render('me/trash-courses',{courseObject})
        } catch (error) {
            next(error)
        }
    }
}

module.exports=new MeController()