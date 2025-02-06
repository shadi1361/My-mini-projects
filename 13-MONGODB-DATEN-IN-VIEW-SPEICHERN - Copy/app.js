const express = require("express");
const morgan = require("morgan"); // Middleware importieren, um statische Dateien dem Projekt bekannt zu machen.
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { title } = require("process");

// Erstellen einer Express App
const app = express(); // app ist ein Objekt, das express() zurückgibt.

// Setzen der View-Engine auf EJS
app.set("view engine", "ejs"); // Hinweis: Alle EJS-Dateien sollten im "views"-Ordner liegen.

//
// Firstly CONNECT TO Mongo DB by Mongoose with URL CONNECTION from MongoDB
const dbURI =
  "mongodb+srv://shadi:shadak1234@cluster0.xjfb7.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";

// da diese funktioniert wie Asynchronous und ergibt uns promise, deshalb: mit .then :
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log("not connected"));

// Middleware und static Dateien
app.use(express.static("public"));

// combined(the most detailed gives us), common, dev, short, tiny
app.use(morgan("tiny"));

// Hauptseite Routes ("/")
app.get("/", (req, res) => {
  res.redirect('/blogs');
});

// About-Seite Route ("/about")
app.get("/about", (req, res) => {
  res.render("about", { title: "Über uns" });
});

// Blog Routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({createdAt : -1})
    .then((result) => {
      res.render("index", { title: "Alle Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Seite zum Erstellen eines neuen Blogs Route ("/blogs/create")
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Neuen Blog erstellen" });
});

// Kontakt-Seite Route ("/contact")
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Kontakt" });
});

// 404-Fehler-Seite Route (falls keine der vorherigen Routen übereinstimmt)
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Seite nicht gefunden" });
});
