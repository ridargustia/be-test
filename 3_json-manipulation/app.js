const { config } = require('./src/config');
const serviceJson = require('./src/services/getJson');

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const result = serviceJson.getNumberOne();
    res.json({
        data: {
            task: "Items in the Meeting Room",
            result: result,
        },
    });
})

app.get('/2', function (req, res) {
    const result = serviceJson.getNumberTwo();
    res.json({
        data: {
            task: "All electronic devices",
            result: result,
        },
    });
    
})

app.get('/3', function (req, res) {
    const result = serviceJson.getNumberThree();
    res.json({
        data: {
            task: " All the furniture",
            result: result,
        },
    });
    
})

app.get('/4', function (req, res) {
    const result = serviceJson.getNumberFour();
    res.json({
        data: {
            task: "All items were purchased on 16 Januari 2020",
            result: result,
        },
    });
    
})

app.get('/5', function (req, res) {
    const result = serviceJson.getNumberFive();
    res.json({
        data: {
            task: "All items with brown color",
            result: result,
        },
    });
    
})


app.listen(config.port);
console.log(`App listening on http://localhost:${config.port}`);