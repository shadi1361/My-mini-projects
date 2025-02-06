/*                    Modell-Ordner : blog.js
Wir erstellen dieses Modell, damit wir es überall verwenden können, um zu speichern, zu löschen und zu erhalten.
*/

const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;

/*  Schritt 1: Grundstruktur eines Schemas
Mit dem Schema erstellen wir eine Instanz, um eine Verbindung zur Sammlung in unserer Datenbank herzustellen.
*/
const blogSchema = new Schema(
  {
    title: {
      type: String, // Hier verwenden wir 'String' mit großem 'S'
      required: true
    },
    snippet: {
      type: String, // Hier verwenden wir 'String' mit großem 'S'
      required: true
    },
    body: {
      type: String, // Hier verwenden wir 'String' mit großem 'S'
      required: true
    }
  },
  { timestamps: true }
);

// Schritt 2: Grundstruktur eines Models

// Das erste Argument hier "Blog" ist sehr wichtig, da wir damit mit der speziellen Sammlung (Collection) verbinden.
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog; // Korrektur von 'modules' zu 'module'
