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

    Category.find()
    .then((categories) =>{
        res.json(categories)
    })
    .catch((err)=> {
        console.log(err)
    })
});

// to add catogries
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

// to edit categories
router.post('/editCategory', testMiddleware, (req, res)=>{
    // changed value name, type, status
    Category.findByIdAndUpdate(req.body.id,{
        name: req.body.name,
        type: req.body.type,
        status: req.body.status
    }).then(()=>{
        res.json({ message: 'saved sucessfully' });
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;