const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
     name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);





userSchema.pre("save", function (next) {
  // either we are creating a user or we are updating a user
    if (!this.isModified("password")) return next();
    
    this.password = bcrypt.hashSync(this.password, 8);
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password.toString(), this.password);
};




module.exports = mongoose.model("user", userSchema);
