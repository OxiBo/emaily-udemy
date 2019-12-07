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
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("access token: ", accessToken);
      //   console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we have the user in our database
        return done(null, existingUser);
      }
      // create a new user, we don't have the user in our database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
