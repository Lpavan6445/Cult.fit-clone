require("dotenv").config();

const passport = require("passport");

const User = require("../models/user.model");

const { v4: uuidv4 } = require("uuid");

const jwt = require("jsonwebtoken");


const GoogleStrategy = require("passport-google-oauth2").Strategy;

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};




passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:2345/auth/google/callback",
      userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
        let user = await User.findOne({ email: profile?._json?.email })
          .lean()
          .exec();

        if (!user) {
          user = await User.create({
            email: profile?._json?.email,
            password: uuidv4(),
            picture: profile._json.picture,
            name: profile.displayName,
          });
        }

          const token = newToken(user);

        return done(null, { user,token }); // user: {user, token}
      }
  )
);

module.exports = passport;




  // async function (request, accessToken, refreshToken, profile, done) {
  //     let user = await User.findOne({ email: profile?._json?.email })
  //       .lean()
  //       .exec();

  //     if (!user) {
  //       user = await User.create({
  //         email: profile?._json?.email,
  //         password: uuidv4(),
  //         picture: profile._json.picture,
  //         name: profile.displayName,
  //       });
  //     }

  //       const token = newToken(user);

  //     return done(null, { user,token }); // user: {user, token}
  //   }


