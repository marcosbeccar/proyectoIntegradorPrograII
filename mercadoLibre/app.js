var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");


let productRouter = require('./routes/product');
let userRouter = require('./routes/user');
let commentRouter = require("./routes/comment");
let indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//==============================  session  ====================================================
app.use(session( { 
  secret: "proyectointegrador2",
	resave: false,
	saveUninitialized: true 
}));

//una vez que tengo la session iniciada arriba, le mando todas las cookies juntas a las vistas:
app.use(function(req, res, next){ 
  res.locals.cookies = req.cookies;
  next(); //se usa next porque esto es middleware (código en app.js), si no lo ponés se rompe
});
//=============================================================================================

app.use('/', indexRouter)
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/comment', commentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
