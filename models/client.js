var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    Timestamp = require('../lib/utils').Timestamp;

var atmListSchema = new mongoose.Schema({
    id: Number,
    limit: Number,
    name: String,
    address: String
});

var clientSchema = mongoose.Schema({
  name: {type: String, required: true, min: 1},
  phone: {
      type: String,
      required: true
  },
  account: {
      number: Number,
      current_balance: Number,
      minimal_balance: Number
  },
  card_number: Number,
  bank: {
      uid: {type: ObjectId, ref: 'Bank'},
      name: String
  },
  created: {type: Number, default: Timestamp.now},
  updated: {type: Number, default: Timestamp.now}
});



//----Statics-------


//----Model-------
var Client = mongoose.model('Client', clientSchema);


module.exports = Client;
