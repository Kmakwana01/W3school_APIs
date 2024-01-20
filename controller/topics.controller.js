let TOPIC = require("../model/topics.model")

exports.add = async (req, res) => {
    console.log(req.files, req.body)
    try {
        if (req.files.image[0].filename) {
            req.body.image = req.files.image[0].filename
        }
        if (!req.body.title || !req.body.image || !req.body.description || !req.body.category || !req.body.subcategory) {
            throw new Error("please enter valid data")
        }
        let data = await TOPIC.create(req.body)

        res.status(200).json({
            message: "success",
            data: data
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.show = async (req, res) => {
    try {

        let data = await TOPIC.find().populate("category").populate("subcategory")

        res.status(200).json({
            status: "success",
            message: "all data",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        if (req.files.image[0].filename) {
            req.body.image = req.files.image[0].filename
        }
        if (!req.query.id) {
            throw new Error("plase enter id")
        }
        let data = await TOPIC.findByIdAndUpdate(req.query.id, req.body)

        if (!data) {
            throw new Error("please enter valid id")
        }

        res.status(200).json({
            status: "success",
            message: "updated data",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.delete = async (req, res) => {
    try {
        if (!req.query.id) {
            throw new Error("plase enter id")
        }
        let data = await TOPIC.findByIdAndDelete(req.query.id)

        res.status(200).json({
            status: "success",
            message: "deleted data",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}