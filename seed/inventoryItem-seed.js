var InventoryItem = require('../models/inventoryItem');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurant-management');

var inventoryItem = [
    new InventoryItem(
        {
            name: 'Rice and curry',
            quantity: '120',
            stockMin:"1"
        }
    ),
    new InventoryItem(
        {
            name: 'Parata',
            quantity: '120',
            stockMin:"1"
        }
    ),new InventoryItem(
        {
            name: 'Noodles',
            quantity: '120',
            stockMin:"1"
        }
    ),new InventoryItem(
        {
            name: 'Kottu',
            quantity: '120',
            stockMin:"1"
        }
    )];

var done= 0;
for(var i = 0; i <inventoryItem.length;i++){
    inventoryItem[i].save(function(err,result){
        done++;
        if(done === inventoryItem.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
