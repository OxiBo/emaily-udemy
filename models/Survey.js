const mongoose = require("mongoose"),
{ Schema } = mongoose,
 RecipientSchema = require ("./Recipient")

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    from_email: String,
    recipients: [RecipientSchema], // https://zellwk.com/blog/mongoose-subdocuments/
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    dateSent: Date,
    lastResponded: Date
})

mongoose.model("surveys", surveySchema);