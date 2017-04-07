/*eslint-env node*/

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();
var resource = require('./routes/resource');
 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dev:dev@ds041150.mlab.com:41150/mongodb');

resource(app);
 
app.listen(3000);
console.log('Listening on port 3000.');
