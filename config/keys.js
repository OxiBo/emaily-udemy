// key.js figure out what set of credentials to use

module.exports = {
  googleClientID:
    "249710655207-mff59kibdpmdbi1dqsbk43adnr8e9spo.apps.googleusercontent.com",
  googleClientSecret: "-EFLHc74_OEBuOp4io8X6XZv",
  mongoURI:
    "mongodb+srv://OxiBo:jrcfyf1981@cluster0-xsu9k.mongodb.net/test?retryWrites=true&w=majority",
  cookieKey: "anystring"
};

// cyPkbHuAAgyyvM36    --- 3ebsfFGDsjPDgQcK
// mongodb+srv://OxiBo:<password>@cluster0-gm3ha.mongodb.net/test?retryWrites=true&w=majority

// mongodb+srv://OxiBo:3ebsfFGDsjPDgQcK@cluster0-gm3ha.mongodb.net/test?retryWrites=true&w=majority

if (process.NODE_ENV === "production") {
  // we are in development
  module.exports = require("./prod");
} else {
  // we are in production
  module.exports = require("./dev");
}
