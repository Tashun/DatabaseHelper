var express = require('express');
var FoodItem=require('../models/foodItem');
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



module.exports = router;
