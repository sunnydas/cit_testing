'use strict';

var express = require('express'),
    app = express();


app.set('views', 'views');
app.set('view engine', 'jade');

var data = {
	name: "Srimant Misra",
	company: "Oracle India Private Ltd"
}

app.get('/', function(req, res) {
    res.render('home', {
		person : data
  });
});

app.listen(8081);
module.exports.getApp = app;