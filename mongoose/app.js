const mongoose = require("mongoose");

//This crates connection and creates a new db
mongoose.connect("mongodb://localhost:27017/Testing",)
.then( () => console.log("connection is Successful...!!"))
.catch((err) => console.log(err));

//Now creating Schema
const PracticeSchema= new mongoose.Schema({
    title : {
       type: String,
        required : true//Here required means its compulsory
    },
    body : String,
    category : String,
    date: {
        type:Date,
        default: Date.now
    }
})

const Practice = new mongoose.model("Practice", PracticeSchema)

