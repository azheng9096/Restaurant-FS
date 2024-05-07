const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Appetizer", "Main", "Soups"],
    default: "Appetizer",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const menuItemModel = mongoose.model("MenuItem", menuItemSchema);

module.exports = { menuItemModel };