/* eslint-env node */
var restful = require('node-restful');
var mongoose = restful.mongoose;
var password = require('../middlewares/password');

module.exports = function(app){

var Resource = app.resource = restful.model('resource', mongoose.Schema({
    name: String,
    password: String,
  }))
  .methods(['get', 'post', 'put', 'delete']);
  
Resource.before('post', password.encrypt)
        .before('put', password.encrypt);
 
Resource.register(app, '/resources');    

}
