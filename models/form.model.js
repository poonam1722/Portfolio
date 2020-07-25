const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true ,},
    msg: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

