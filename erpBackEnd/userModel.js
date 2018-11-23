var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var UserModel = new Schema({
    userName: {
        type: String,
    },
    userId: {
        type: Number,
        message: 'Invalid UserId'
    },
    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Invalid email"
    },
    password: {
        type: String
    },
    leaves: {
        type: Number,
        message: 'Invalid Leaves'
    },
   
});
UserModel.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}
UserModel.methods.validPassword =function (password, Password){
    
    return bcrypt.compareSync(password, Password);
}

var userModel = mongoose.model('userModel', UserModel);
module.exports = userModel;