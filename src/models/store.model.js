const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    image1 :{type:String, required:true},
    image2:{type:String, required:true},
    image3:{type:String, required:true},
    price:{type:Number, required:true},
    color:{type:String, required:true},
    name:{type:String, required:true},
    type:{type:String, required:false},
})
const storeModel = mongoose.model("store",storeSchema)

module.exports = storeModel