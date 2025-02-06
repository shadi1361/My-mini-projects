const express = require("express");
const morgan = require("morgan"); //Middleware importieren, um statische Dateien dem Projekt bekannt zu machen.
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

//combined(the most detailed gives us), common, dev, short, tiny
app.use(morgan("tiny"));

// Ziel: Neue Dokumente in Datenbank hinzufügen

// Blog hinzufügen
// Wir initialisieren den folgenden Blog basierend auf dem blog.js Schema */
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 7",
    snippet: "about my new blog 7",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing."
  });
  //promise object mit 'then' und 'catch'
  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log("err"));
});

// Alle Blogs abrufen (getting all blogs)
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log("err"));
});

// Einzelnen Blog abrufen (getting single blog)
app.get("/single-blog", (req, res) => {
  Blog.findById("67a49501832a2ac7785f36cf")
    .then((result) => res.send(result))
    .catch((err) => console.log("err"));
});

// Einzelnen Blog löschen:
app.get("/d-single-blog", (req, res) => {
  Blog.findByIdAndDelete("67a4a461f91d6074eb9e38a5")
    .then((result) => {
      if (result) {
        res.send(`Document Deleted: ${result}`);
      } else {
        res.send("Kein Blog gefunden zum Löschen."); //
      }
    })
    .catch((err) => console.log(err));
});

// Löschen aller Blogs
app.get("/d-all-blogs", (req, res) => {
  Blog.deleteMany({})
    .then((result) => res.send(result))
    .catch((err) => console.log("err"));
});

// Hauptseite Route ("/")
app.get("/", (req, res) => {
  const blogs = [
    { title: "Shadi in Journey", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "Tamara at work", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "How to fix bugs", snippet: "Lorem ipsum dolor sit amet..." }
  ];
  res.render("index", { title: "Home", blogs }); // render Methode, um die index.ejs Datei zu rendern
});

// About-Seite Route ("/about")
app.get("/about", (req, res) => {
  res.render("about", { title: "Über uns" });
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
