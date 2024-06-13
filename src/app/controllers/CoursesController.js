const Course=require('../models/Course')
class CoursesController{
    // method GET courses/:slug
    async show(req,res,next){
        try {
            const courses=await Course.findOne({slug: req.params.slug})
            const coursesObject=courses.toObject()
             res.render('courses/show',{coursesObject})
        } catch (error) {
            next(error)
        }
    }
   
    // method GET courses/create
    create(req,res,next){
        try {
            res.render('courses/create')
        } catch (error) {
            next(error)
        }
    }

    // method POST courses/store
    async store(req,res,next){
        try {
           //res.json(req.body)
          const course=new Course(req.body)
          course.image=`https://i.ytimg.com/vi/${course.videoid}/maxresdefault.jpg`
          course.slug=course._id
          // gán date của req.body cho course 
          // sau đó lưu
          await course.save()
          res.redirect('/home')
        } catch (error) {
            next(error)           
         }
    }

    //GET /courses/:id/edit
    async edit(req,res,next){
        try {
          const course= await Course.findById(req.params.id)
          const courseObject=course.toObject()
            res.render('courses/edit',{courseObject})
        } catch (error) {
            next(error)
        }  
    }

    //PUT  /courses/:id
    async update(req,res,next){
       try {
        req.body.image=`https://i.ytimg.com/vi/${req.body.videoid}/maxresdefault.jpg`
        await Course.findByIdAndUpdate(req.params.id,req.body)
         res.redirect('/home')
       } catch (error) {
          next(error)
       }
    }

    //DELETE /courses/:id
    async destroy(req,res,next){
        try {
           await Course.delete({_id: req.params.id})
           res.redirect('back')
        } catch (error) {
            next(error)
        }
    }


    // PATCH /courses/:id/restore
    async restore(req,res,next){
        try {
            await Course.restore({_id: req.params.id})
            res.redirect('back')
        } catch (error) {
            next(error)
        }
    }

    //DELETE /courses/:id/delete
    async deleteEver(req,res,next){
        try {
           await Course.deleteOne({_id: req.params.id})
           res.redirect('back')
        } catch (error) {
            next(error)
        }
    }
}

module.exports=new CoursesController()