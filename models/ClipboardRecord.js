const mongoose = require('mongoose');

const clipboardRecordSchema = new mongoose.Schema({
    content:{
        type: String,
        trim: String
    },
    device: {
        type: String,
        trime: true
    },
    eventDate: {
        type:Date,
        trim: true
    }
})
module.exports =  mongoose.model("ClipboardRecord", clipboardRecordSchema);
