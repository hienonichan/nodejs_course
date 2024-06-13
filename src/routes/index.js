const newsRouter = require('./news');
const homeRouter = require('./home');
const searchRouter = require('./search');
const coursesRouter=require('./courses')
const meRouter=require('./me')

function route(app) {
  app.use('/home', homeRouter);
  app.use('/news', newsRouter);
  app.use('/search', searchRouter);
  app.use('/courses',coursesRouter)
  app.use('/me',meRouter)
}

module.exports = route;
