const mongoose = require('mongoose')

const paymentTemplate = new mongoose.schema({
    email:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }
})

module.exports = mongoose.models('mytable', paymentTemplate )