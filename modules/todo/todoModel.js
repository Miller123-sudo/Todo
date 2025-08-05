const mongoose = require("mongoose");

// Base Model
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please tell us your first name!"],
    },
    text: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
