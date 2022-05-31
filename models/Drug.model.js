const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
  name: String,
  recipe: Boolean,
  price: Number,
  drugCategorie: {
    ref: "Categorie",
    type: mongoose.SchemaTypes.ObjectId
  },
});

const Drug = mongoose.model("Drug", drugSchema);

module.exports = Drug;
