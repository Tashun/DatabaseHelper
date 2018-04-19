var mongoose =require('mongoose');
var Schema =mongoose.Schema;

var schema=new Schema({
    name : String,
    Quantity : String,
    stockMin : String


});

module.exports=mongoose.model('InventoryItem',schema);