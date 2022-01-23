const express = require("express")
const app = express()

const User = require("../models/user.model")

app.delete("/delete", async (req, res) => {
  const userDelete = await
    res.send("del")
    // const user = await User.findByIdAndDelete(req.user.user.) 
});