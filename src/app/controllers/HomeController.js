const Course=require('../models/Course')

class HomeController {

  //GET /home
  async index(req, res,next) {
     try {
      const courses=await Course.find({})
      // Chuyển đổi từng tài liệu Mongoose thành đối tượng JavaScript cơ bản
      // Nếu muốn tiện thì viết hàm chuyển đổi sau đó import vào dùng
    const coursesObject = courses.map(course => course.toObject());
    // Render template với dữ liệu đã chuyển đổi
    res.render('home', { coursesObject });
     } catch (error) {
       next(err)
     }    
  }
}

module.exports = new HomeController();
