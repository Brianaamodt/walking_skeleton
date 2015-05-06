/**
 * Created by brianaamodt on 5/5/15.
 */
var express = require('express');
var app = express();
var index = require('./routes/index.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/", index);
module.exports = app;


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});
