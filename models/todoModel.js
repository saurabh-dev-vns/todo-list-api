const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const TodoList = mongoose.model("List",todoSchema);

module.exports = TodoList;