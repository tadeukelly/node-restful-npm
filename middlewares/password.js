/* eslint-env node */
var bcrypt   = require('bcrypt');

module.exports = {
    encrypt: function(req, res, next){
        if (typeof req.body.password !== 'undefined' && req.body.password !== null){
            bcrypt.hash(req.body.password, 10, function(err, hash) {
              if (err){                
                    next(err);
              }
              else{
                    req.body.password = hash;
                    next();
               }
            });
        }else
            next();
    }      
};