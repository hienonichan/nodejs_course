class NewsController {
  //GET news/:slug
  index(req, res) {
    res.render('news');
  }
  //GET news/
  show(req, res) {
    res.send('hello world');
  }
}

module.exports = new NewsController();
