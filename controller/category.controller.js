let CAT = require("../model/category.model")

exports.add = async (req, res) => {
    try {
        if (!req.body.name || !req.body.colorcode) {
            throw new Error("please enter valid data")
        }
        let data = await CAT.create(req.body)

        res.status(200).json({
            status: "success",
            message: "data added",
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

        let data = await CAT.find()
      
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
        console.log(req.query.id);

        let data = await CAT.findByIdAndUpdate(req.query.id , req.body)

        console.log(data);
        if (!data) {
            throw new Error("please enter valid id")
        }

        data = await CAT.findOne({ _id: req.query.id })

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


exports.delete = async (req,res)=>{
  try {
    if(!req.query.id){
        throw new Error("please enter id")
    }
    let data = await CAT.findByIdAndDelete(req.query.id)
    if(!data){
        throw new Error("please enter valid id")
    }
    res.status(200).json({
        status : "success",
        message:"deleted data",
        data : data
    })

  } catch (error) {
    res.status(400).json({
        status : "fail",
        message : error.message
    })
  }
}