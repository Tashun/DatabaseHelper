var express = require('express');
var FoodItem=require('../models/foodItem');
var InventoryItem=require('../models/inventoryItem');
var router = express.Router();
var mongoose=require("mongoose");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get all data from database
router.get('/FoodItems',function (req,res,next) {
 FoodItem.find(function (err,FoodItems) {
   res.send(FoodItems);
 });
});


// get Inventory
router.get('/GetInventory',function (req,res,next) {
    InventoryItem.find(function (err,InventoryItems) {
        res.send(InventoryItems);
    });

});

//add a new Item to intentory
router.get('/addInventory',function (req,res,next) {
    if ((req.body.name!=null)&&(req.body.quantity!=null)&&(req.body.stockMin!=null)){
    var inventoryItem= new InventoryItem({
        name:req.body.name,
        quantity:req.body.quantity,
        stockMin:req.body.stockMin

    });
    console.log("init the inven");
    inventoryItem.save(function (err,result) {
       if (err){
           //throw err;
           res.json({'validity': 'false'});
       }
       else {
           res.json({'validity':'true'});
       }
   });}
   else{
        res.json({'validity':'Not complete form'});
    }
});

//update a item in inventory
router.get('/updateInventory',function (req,res,next) {
    InventoryItem.count( {name:request.body.name}, function (err, count){
        if (count>0){
            res.send({validity:true});
        }
        else {
            res.send({validity:false});
        }
    });

});


module.exports = router;

