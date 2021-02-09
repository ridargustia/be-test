const { config } = require('./src/config');
const serviceJson = require('./src/services/getJson');

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const result = serviceJson.getNumberOne();
    
    res.json({
        data: {
            command: "Users don\'t have any phone numbers",
            result: result,
        },
    });
    
})

app.get('/2', function (req, res) {
    const result = serviceJson.getNumberTwo();
    res.json({
        data: {
            command: "Users have articles",
            result: result,
        },
    });
    
})

app.get('/3', function (req, res) {
    const result = serviceJson.getNumberThree();
    res.json({
        data: {
            command: "Users who have \"annis\" on their name",
            result: result,
        },
    });
    
})

app.get('/4', function (req, res) {
    const result = serviceJson.getNumberFour();
    res.json({
        data: {
            command: "Users have articles on the year 2020",
            result: result,
        },
    });
    
})

app.get('/5', function (req, res) {
    const result = serviceJson.getNumberFive();
    res.json({
        data: {
            command: "Users born in 1986",
            result: result,
        },
    });
    
})

app.get('/6', function (req, res) {
    const result = serviceJson.getNumberSix();
    res.json({
        data: {
            command: "Articles that contain \"tips\" on the title",
            result: result,
        },
    });
    
})

app.get('/7', function (req, res) {
    const result = serviceJson.getNumberSeven();
    res.json({
        data: {
            command: "Articles published before August 2019",
            result: result,
        },
    });
    
})


app.listen(config.port);
console.log(`App listening on http://localhost:${config.port}`);