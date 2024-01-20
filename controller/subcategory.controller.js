let SUB_CAT = require("../model/subcategory.model")

exports.add = async(req,res)=>{
   try {
    if(!req.body.name){
        throw new Error("please enter new data")
    }
    let data = await SUB_CAT.create(req.body)
    res.status(200).json({
        message : "success",
        data : data
    })
   } catch (error) {
    res.status(400).json({
        status : "fail",
        message:error.message
    })
   }
}

exports.show = async(req,res)=>{
   try {
   
    let data = await SUB_CAT.find()
    .populate("category")
    
    res.status(200).json({
        status : "success",
        message : "all data",
        data : data
    })
   } catch (error) {
    res.status(400).json({
        status : "fail",
        message:error.message
    })
   }
}

exports.update = async(req,res)=>{
   try {
   if(!req.query.id){
    throw new Error("plase enter id")
   }
    let data = await SUB_CAT.findByIdAndUpdate(req.query.id,req.body)

    if(!data){
        throw new Error("please enter valid id")
    }
    
    res.status(200).json({
        status : "success",
        message : "updated data",
        data : data
    })
   } catch (error) {
    res.status(400).json({
        status : "fail",
        message:error.message
    })
   }
}

exports.delete = async(req,res)=>{
   try {
   if(!req.query.id){
    throw new Error("plase enter id")
   }
    let data = await SUB_CAT.findByIdAndDelete(req.query.id)

    res.status(200).json({
        status : "success",
        message : "deleted data",
        data : data
    })
   } catch (error) {
    res.status(400).json({
        status : "fail",
        message:error.message
    })
   }
}