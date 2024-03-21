const mongoose = require('mongoose')

 const newBooking = new mongoose.Schema({
     fname:String,
     lname:String,
     phoneNumber:String,
     eAddress:String,
     vType:String,
     vNum:String,
     date:Date,
     time:TimeRanges,
 });

 const Book = mongoose.model('Book', newBooking);

module.exports = Book;