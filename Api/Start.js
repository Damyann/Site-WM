const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const session = require("express-session");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const app = express();
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/Views", express.static(path.join(__dirname, "../Views")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../Views"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "verysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.render("Dealer/1-Login-Dealer", { error: null });
});

module.exports = app;
module.exports.handler = serverless(app);
