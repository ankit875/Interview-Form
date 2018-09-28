const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const RecordSchema= new Schema({
    purpose:{
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    address :{
        type: String,
        require: true
    },
    interviewer: {
        type: String,
        require: true
    },
    interviewee: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    randomfield:{
        type: String,
        require: true
    }
})

module.exports= mongoose.model('Record', RecordSchema)