// run heroku console - https://stackoverflow.com/questions/19341975/heroku-node-cannot-find-module-error

const express = require("express"),
  mongoose = require("mongoose"),
  // mongoAtlasPassword = process.env.MONGO_ATLAS_PASSWORD,
  keys = require("./config/keys"),
  cookieSession = require("cookie-session"),
  passport = require("passport");

// require("dotenv").config();
// have to require the model before requiring passport
require("./models/User");
require("./services/passport");


// console.log(keys.mongoURI)
mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(err => {
    console.log("ERROR:", err.message);
  });

const app = express();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  

  app.use(passport.initialize());// has to be before 'require("./routes/authRoutes")(app);'
  app.use(passport.session()); // has to be before 'require("./routes/authRoutes")(app);'
  

require("./routes/authRoutes")(app);

app.set('view engine', 'ejs');
app.get("/test", (req, res) => {
  res.render('test')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App is working");
});
