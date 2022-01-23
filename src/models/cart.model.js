const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
       cartProdaddedId:{type:mongoose.Schema.Types.ObjectId,
      ref:"store",
      required:false},
      cartEataddedId:{type:mongoose.Schema.Types.ObjectId,
            ref:"mealdata",
            required:false}
})
const cartModel = mongoose.model("cartdata",cartSchema)


module.exports = cartModel