const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, rew) => {
  rew.render("index");
});
app.get("/about", (req, rew) => {
  rew.render("about");
});
app.get("/Contact", (req, rew) => {
  rew.render("Contact");
});
app.post("/Contact/send", (req, rew) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: "rrraja83@gmail.com", pass: "W1R@L@S5" }
  });
  let mailOptions = {
    from: "Raja raghav <rrraja83@gmail.com>",
    to: "support@gmail.com",
    subject: "Web sub",
    body:
      "please help me do this... Name:" +
      req.body.name +
      "Email:" +
      req.body.email +
      "Message:" +
      req.body.message,
    html:
      "<p>please help me do this... </p><ul><li>" +
      req.body.name +
      "</li>" +
      "<li>" +
      req.body.name +
      "</li>" +
      "<li>" +
      req.body.message +
      "</li></ul>"
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("error", err);
      rew.redirect("/");
    } else {
      console.log("error", info.response);
      rew.redirect("/");
    }
  });
});
app.listen(5000);
console.log("server running on port 5000.");
