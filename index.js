// run heroku console - https://stackoverflow.com/questions/19341975/heroku-node-cannot-find-module-error
// http protocol - https://www.w3.org/Protocols/ and https://www.w3.org/Protocols/rfc2616/rfc2616-sec10 

const express = require("express"),
  mongoose = require("mongoose"),
  // mongoAtlasPassword = process.env.MONGO_ATLAS_PASSWORD,
  keys = require("./config/keys"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  bodyParser = require("body-parser");

// require("dotenv").config();
// have to require the model before requiring passport
require("./models/User");
require("./models/Survey");
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

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize()); // has to be before 'require("./routes/authRoutes")(app);'
app.use(passport.session()); // has to be before 'require("./routes/authRoutes")(app);'

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);


if (process.env.NODE_ENV === "production") {
  // Express will serve production assets like main.css  or main.js files
  app.use(express.static("client/build"));

  // Express will serve index.html if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App is working");
});
