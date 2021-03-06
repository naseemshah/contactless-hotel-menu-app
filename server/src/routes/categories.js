var express = require("express");

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
    if (!name || !type || !status.toString()){
        return res.status(422).json({error: 'Enter all fields'})
    };
    var category = new Category({
        name,
        type,
        status
    });
    category.save()
        .then(()=>{
            // res.json({ message: 'saved sucessfully' });
        })
        .catch((err) => console.log(err));
    res.json({ message: 'done'});
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

// change status
router.put('category/changeStatus', testMiddleware, (req, res)=>{
    // changes value status
    Category.findByIdAndUpdate(req.body.id, {
        status: req.body.status
    }).then(()=>{
        res.json({ message: 'saved sucessfully' });
    }).catch((err)=>{
        console.log(err)
        res.json({ error: err})
    })
})

module.exports = router;