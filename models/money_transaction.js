var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    Timestamp = require('../lib/utils').Timestamp;

//-----Schema------
var MoneyTransactionSchema = new mongoose.Schema({
    atm_uid: {type: ObjectId, required: true},
    type: {type: String, enum: ['cash_in', 'cash_out', 'payment']},
    time: {type: Number, default: Timestamp.now},
    sum: {type: Number, required: true},
    client: {
        uid: {type: ObjectId, required: true},
        name: {type: String}
    }
});


//----Statics-------


//----Model-------
var MoneyTransaction = mongoose.model('MoneyTransaction', MoneyTransactionSchema, 'MoneyTransactions');


module.exports = MoneyTransaction;
