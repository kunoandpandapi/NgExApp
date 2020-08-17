const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  image: String,
  name: { type: String, required: true, max:[60, '最大60文字まで']},
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtxt1: String,
  headingtxt2: String,
  headingtxt3: String
});

module.exports = mongoose.model('Product', ProductsSchema)
