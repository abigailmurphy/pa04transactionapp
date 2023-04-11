'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var toDoItemSchema = Schema( {
  description: String,
  amount: Double,
  category: String.
  createdAt: Date,
  userId: ObjectId
} );

module.exports = mongoose.model( 'TransactionItem', toDoItemSchema );
