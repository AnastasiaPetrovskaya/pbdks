var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    Timestamp = require('../lib/utils').Timestamp;

//-----Schema------
var atmListSchema = new mongoose.Schema({
    id: Number,
    limit: Number,
    name: String,
    address: String
});

var bankSchema = mongoose.Schema({
  name: {type: String, required: true, min: 1},
  phone: {
      type: String,
      required: true
  },
  address: {
      type: String,
      required: true
  },
  atm: [atmListSchema],
  created: {type: Number, default: Timestamp.now},
  updated: {type: Number, default: Timestamp.now}
});



//----Statics-------


//----Model-------
var Bank = mongoose.model('Bank', bankSchema, 'Banks');


module.exports = Bank;
