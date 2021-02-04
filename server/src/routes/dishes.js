var express = require("express");
var router = express.Router();

//middleware
var testMiddleware = require('../auth/middleware');

// models
var Category = require('../models/Categories');
var Dishes = require('../models/Dishes');

router.get('/dishes', testMiddleware, (req, res)=>{
    // display dishes
    res.json({ message: 'done'});
});

router.post('/addDishes', testMiddleware, (req, res) => {
    // datas to be added name, category id, type, price, status, special
    // console.log(req.body.id);
    var name = req.body.name;
    var category_id = req.body.category_id;
    var type = req.body.type;
    var price = req.body.price;
    var status = req.body.status
    var special = req.body.special;
    if (!name || !category_id || !type || !price || !status.toString() || !special.toString()){
        return res.status(422).json({error: 'Enter all fields'})
    };
    var dish = new Dishes({
        name,
        category_id,
        type,
        price,
        status,
        special
    });
    dish.save()
    .catch((err) => console.log(err));
    res.json({ message: 'dish saved'});
    
});


module.exports = router;