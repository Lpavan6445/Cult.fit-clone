const express = require("express")

const storeModel = require("../models/store.model")

// const router = express.Router();
const app = express()
app.use(express.json())

app.post("/",async (req,res)=>{
    try{ 
        for(let i=0; i<req.body.length; i++){
           req.body[i].type = "Women"
        }
        const store = await storeModel.insertMany(req.body)
   
       res.send(store)
   }catch(e){
       console.log(e.message)
   }
})

app.get("/:type",async (req,res)=>{
    try{
        const store = await storeModel.find({type:req.params.type})
        res.header("Access-Control-Allow-Origin", "*");

        res.send(store)
   }catch(e){
       console.log(e.message)
   }
})

module.exports = app;