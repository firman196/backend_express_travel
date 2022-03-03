const mongoose = require("mongoose");
const imageScema = mongoose.Scema({
    imageUrl : {
        type        : String,
        required    : true
    }
})

module.exports = mongoose.model('Image',imageScema)