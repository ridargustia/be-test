const fs = require('fs');

const json = JSON.parse(fs.readFileSync('inventory_list.json').toString());

function getNumberOne () {
    const result = [];
    const place = 'Meeting Room';
    json.forEach(a => {
        if (a.placement.name === place) {
            result.push(a);
        }
    });
    return result;
}

function getNumberTwo () {
    const result = [];
    const type = 'electronic';
    json.forEach(a => {
        if (a.type === type) {
            result.push(a);
        }
        
    });
    return result;
}

function getNumberThree () {
    const result = [];
    const type = 'furniture';
    json.forEach(a => {
        if (a.type === type) {
            result.push(a);
        }
    })
    return result;
}

function getNumberFour () {
    const result = [];
    const onDate = '2020-01-16';

    json.forEach(a => {
        let date = new Date(a.purchased_at*1000);
        let year = date.getFullYear();
        let month = ("0"+(date.getMonth()+1)).substr(-2);
        let day = ("0"+date.getDate()).substr(-2);
        let hour = ("0"+date.getHours()).substr(-2);
        let minutes = ("0"+date.getMinutes()).substr(-2);
        let seconds = ("0"+date.getSeconds()).substr(-2);
    
        const datetime = `${year}-${month}-${day}`;

        if (datetime === onDate) {
            result.push(a);
        }
    });
    return result;
}

function getNumberFive () {
    const result = [];
    const tag = 'brown';
    json.forEach(a => {
        a.tags.forEach(value => {
            if (value === tag) {
                result.push(a);
            }
        });
    });
    
    return result;
}

module.exports = {
    getNumberOne: getNumberOne,
    getNumberTwo: getNumberTwo,
    getNumberThree: getNumberThree,
    getNumberFour: getNumberFour,
    getNumberFive: getNumberFive
}