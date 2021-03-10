const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (request, response) => {
    burger.all((data) => {
        const results = data.map((data) => ({
            ...data,
        }))
        console.log(results);
        const burgerData = {
            burger: results
        };
        // console.log(data);
        console.log(burgerData);
        response.render('index', burgerData);
    });
});

router.post('/api/burgers', (request, response) => {
    burger.create(['name', 'eaten'], [req.body.name, req.body.eaten], (result) => {
        response.json({ id: result.insertId });
    });
});

module.exports = router;