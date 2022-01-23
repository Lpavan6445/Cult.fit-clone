const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    strMealThumb:{type:String, required:true},
    strCategory:{type:String, required:true},
    strMeal:{type:String, required:true},
    price:{type:Number,required:false}
})
const mealModel = mongoose.model("mealdata",mealSchema)


module.exports = mealModel