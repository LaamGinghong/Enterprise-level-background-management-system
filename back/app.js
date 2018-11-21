const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const menu = require('./routes/menu');
const dashboardCard = require('./routes/dashboard/dashboard-card');
const dashboardArticle = require('./routes/dashboard/dashboard-article');
const dashboardRidership = require('./routes/dashboard/dashboard-ridership');
const dashboardMessage = require('./routes/dashboard/dashboard-message');
const dashboardMessageDelete = require('./routes/dashboard/dashboard-message-delete');
const dashboardMessageActive = require('./routes/dashboard/dashboard-message-active');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/menu', menu);
app.use('/dashboardCard', dashboardCard);
app.use('/dashboardArticle', dashboardArticle);
app.use('/dashboardRidership', dashboardRidership);
app.use('/dashboardMessage', dashboardMessage);
app.use('/dashboardMessageDelete', dashboardMessageDelete);
app.use('/dashboardMessageActive', dashboardMessageActive);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
