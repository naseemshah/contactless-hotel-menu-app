var express = require("express");
var mongoose = require('mongoose');
var json = require('json');
var bodyParser = require('body-parser')

var router = express.Router();

//middleware
var testMiddleware = require('../auth/middleware');

// models
var Category = require('../models/Categories');

router.get('/categories',testMiddleware, (req, res)=>{
    // Category.find({});
    res.send('category');
});

router.post('/addCategory',[testMiddleware], (req, res)=>{
    // name, type, status
    var name = req.body.name;
    var type = req.body.type;
    var status = req.body.status;
    if (!name || !type || !status){
        return res.status(422).json({error: 'Enter all fields'})
    };
    var category = new Category({
        name,
        type,
        status
    });
    category.save()
        .then((category)=>{
            // res.json({ message: 'saved sucessfully' });
        })
        .catch((err) => console.log(err));
    res.json({ message: 'done'});
    //console.log(req.body.name)
})

module.exports = router;