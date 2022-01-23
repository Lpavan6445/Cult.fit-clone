const express = require("express")

const cartModel = require("../models/cart.model")

// const router = express.Router();
const app = express()
app.use(express.json())

app.get("/:type",async (req,res)=>{
    try{  
        let data =[]
        var cartedProd;
        if(req.params.type === "store"){
            cartedProd = await cartModel.find().populate("cartProdaddedId")
            for(let i=0; i<cartedProd.length; i++){
                if(cartedProd[i].cartProdaddedId){
                    data.push(cartedProd[i].cartProdaddedId)
                }
            }
        }else if(req.params.type === "eat"){
            cartedProd = await cartModel.find().populate("cartEataddedId")

            for(let i=0; i<cartedProd.length; i++){
                if(cartedProd[i].cartEataddedId){
                    data.push(cartedProd[i].cartEataddedId)
                } 
            }
        }
       
        res.header("Access-Control-Allow-Origin", "*");

        res.send(data)
   }catch(e){
       console.log(e.message)
   }
})
app.delete("/:type/:id",async (req,res)=>{
    try{
        var cartedProd;
        if(req.params.type === "store"){
            cartedProd = await cartModel.deleteOne({cartProdaddedId:{_id: req.params.id}}).populate("cartProdaddedId")
        }else if(req.params.type === "eat"){
            cartedProd = await cartModel.deleteOne({cartEataddedId:{_id: req.params.id}}).populate("cartEataddedId") 
        }
         res.header("Access-Control-Allow-Origin", "*");
           console.log(cartedProd)
        res.send(cartedProd)
   }catch(e){
       console.log(e.message)
   }
})

app.post("/add",async (req,res)=>{
    try{ 
        console.log(req.body)
        const addTocart = await cartModel.create(req.body)
    //   console.log(addTocart)
       res.send(addTocart)
   }catch(e){
       console.log(e.message)
   }
})



module.exports = app;