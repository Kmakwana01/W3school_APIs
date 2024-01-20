let mongoose = require("mongoose")

let subcategory = new mongoose.Schema({
    name : String,
    category  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
})

module.exports = mongoose.model("subcategory",subcategory)