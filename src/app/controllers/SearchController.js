class SearchController {
  // GET /search
  index(req, res) {
    res.render('search');
  }
  //POST /search
  main(req, res) {
    res.render('search');
    console.log(req.body);
  }
}

module.exports = new SearchController();
