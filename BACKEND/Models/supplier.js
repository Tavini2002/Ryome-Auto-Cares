const mongoose =require("mongoose");
const schema = mongoose.schema;

const supplierSchema =new schema({
    name:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})