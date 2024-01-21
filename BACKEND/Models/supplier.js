const mongoose =require('mongoose');
const Schema = mongoose.Schema;

// schema (it's like an template)

const supplierSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    address : {
        type : String, 
        required : true
    },
    country : {
        type : String,
        required : true
    }
})


const supplier = mongoose.model("Supplier",supplierSchema);

module.exports = supplier;
 
