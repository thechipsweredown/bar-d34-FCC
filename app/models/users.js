'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
facebook:{
  id: String,
  displayName:String,
  email: String
}
});
module.exports = mongoose.model('User',User);
