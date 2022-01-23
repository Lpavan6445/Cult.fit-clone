const express = require("express")

const mealModel = require("../models/meal.model")

// const router = express.Router();
const app = express()
app.use(express.json())

app.post("/",async (req,res)=>{
    try{ 
        for(let i=0; i<req.body.length; i++){
           req.body[i].price = Math.floor(Math.random() * 200) + 100
        }
        const meals = await mealModel.insertMany(req.body)
   
       res.send(meals)
   }catch(e){
       console.log(e.message)
   }
})

app.get("/:catg",async (req,res)=>{
    try{
        const meals = await mealModel.find({strCategory:req.params.catg})
        res.header("Access-Control-Allow-Origin", "*");

        res.send(meals)
   }catch(e){
       console.log(e.message)
   }
})

module.exports = app;