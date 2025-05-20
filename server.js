const express = require("express");
const path = require("path");
const session = require("express-session");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const app = express();
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/Views", express.static(path.join(__dirname, "Views")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

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

// Добави тук всички останали рутове

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
