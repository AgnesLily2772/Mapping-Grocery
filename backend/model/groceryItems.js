const mongoose = require('mongoose')

const groceries = new mongoose.Schema({
    item:{
        type: String,
        required: true
    },
})