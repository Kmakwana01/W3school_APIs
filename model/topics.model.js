let mongoose = require("mongoose")

let topics = new mongoose.Schema({
    title : String,
    description : String,
    image : String,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    subcategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subcategory"
    }
})

module.exports = mongoose.model("topics",topics)