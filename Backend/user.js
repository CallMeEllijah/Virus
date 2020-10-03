var mongoose = require('mongoose');
//schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
   User.find(callback).limit(limit); 
}