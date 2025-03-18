var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var workSchema= new Schema({
    email:{
        type: String, 
        require:true
    }, 
    title:{
        type: String, 
        require: true
    },
    description:{
        type: String, 
        require: false
    },
    prize:{
        type: Number, 
        require: true
    }

});

module.exports = mongoose.model('work',workSchema);