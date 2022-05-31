const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  user: {
      ref: 'User',
      type: mongoose.SchemaTypes.ObjectId
  },
  drugs: [{
      ref: "Drug",
      type: mongoose.SchemaTypes.ObjectId
  }],
  total: {
    type: Number,
    default: 0
  }
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;