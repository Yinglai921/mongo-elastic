// models/keywords.js

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Keyword = new Schema({
    ccm2_Id: {type: String},
    description: {type: String},
    parent: {type: String},
    value: {type: Number},
    open_value: {type: Number},
    children: {type: Array}
})

module.exports = mongoose.model('keywords', Keyword);
