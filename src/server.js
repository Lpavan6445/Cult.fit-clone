const app = require("./index");

const connect = require("./configs/db");
const port = process.env.PORT || 2345;
app.listen(port, async() =>{
    await connect();
    console.log("listen on port 2345")
})
