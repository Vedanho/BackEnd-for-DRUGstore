const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  name: String,
});

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;