const mongoose = require('../connection.js')

const Schema = mongoose.Schema

const accountSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('User', accountSchema)
