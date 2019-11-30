const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  mongoose = require("mongoose"),
  keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


// https://console.developers.google.com/apis/dashboard?project=our-mechanism-252021&pli=1
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("access token: ", accessToken);
      //   console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we have the user in our database
          done(null, existingUser);
        } else {
          // create a new user, we don't have the user in our database
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });

      //   new User({
      //     googleId: profile.id
      //   }).save();
    }
  )
);
