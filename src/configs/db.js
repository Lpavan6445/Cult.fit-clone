const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect("mongodb+srv://cultfit1234:cultfit1234@cultfit.gjn58.mongodb.net/Cultfit-clone?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
}