const mongoose = require("mongoose"),
  requireLogin = require("../middlewares/requireLogin"),
  requireCredits = require("../middlewares/requireCredits"),
  Survey = mongoose.model("surveys"),
  Mailer = require("../services/Mailer"),
  surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for your feedback");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })), // https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/7673304#content
      _user: req.user.id,
      dateSent: Date.now()
    });

    // send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(err);
    }
  });
};
