const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const route = require('./routes');
const db=require('./config/db/index')
const methodOverride=require('method-override')

//connect DB
db()

// use middleware xử lí static file
// tức là ta có thể truy cập được tất cả các static file trong folder public thông qua url
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// middleware logger : morgan
//app.use(morgan('combined'))

app.use(methodOverride('_method'))

// template engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// router init Khởi tạo hàm route trong file routes
route(app);
app.listen(port, () => {
  console.log(`server dang chay o cong http://localhost:${port}/home`);
});
