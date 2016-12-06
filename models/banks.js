var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;
    //validators = require('../validators');

//-----Schema------
var bankSchema = mongoose.Schema({
  name: {type: String, required: true, min: 1},
  phone: {
      type: String,
      required: true,
      validate: validators.phone_validator
  },
  address: {
      type: String,
      required: true,
      validate: validators.phone_validator
  },
  atm: [atmListSchema],
  created: {type: Number, default: Timestamp.now},
  updated: {type: Number, default: Timestamp.now}
});

var atmListSchema = new mongoose.Schema({
    id: Number,
    limit: Number,
    name: String
});

//----Statics-------


//----Model-------
var Bank = mongoose.model('Bank', bankSchema, 'Banks');


module.exports = Client;
