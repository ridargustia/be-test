const fs = require('fs');

const json = JSON.parse(fs.readFileSync('profile_list.json').toString());

function getNumberOne () {
    let result = [];
    json.forEach(a => {
        // console.log(a.profile.phones.length)
        if(a.profile.phones.length === 0){
            result.push(a);
        }
    });
    return result;
}

function getNumberTwo () {
    let result = [];
    json.forEach(a => {
        // console.log(a.articles.length);
        if(a.articles.length !== 0){
            result.push(a);
        }
    });
    return result;
}

function getNumberThree () {
    let arr = [];
    json.forEach(a => {
        const value = a.profile.full_name.indexOf('Annis');
        if (value >= 0) {
            arr.push(a);
        }
    })
    return arr;
}

function getNumberFour () {
    const arr = [];
    const year = 2020;
    json.forEach(a => {
        a.articles.forEach((b, i) => {
            const value = b.published_at.substr(0, 4);
            
            if (value == year) {
                arr.push(a.profile);
            }
        })
    });
    
    //Menghapus duplikat array value
    for(var i=0; i<arr.length; ++i) {
        for(var j=i+1; j<arr.length; ++j) {
            if(arr[i] === arr[j])
                arr.splice(j--, 1);
        }
    }
    
    return arr;
}

function getNumberFive () {
    const arr = [];
    const year = 1986;
    json.forEach(a => {
        const value = a.profile.birthday.substr(0, 4);
        if (value == year) {
            arr.push(a);
        }
    })
    return arr;
}

function getNumberSix () {
    const arr = [];
    json.forEach(a => {
        a.articles.forEach(b => {
            // console.log(b.title.indexOf('Tips'))
            const value = b.title.indexOf('Tips');
            if (value >= 0) {
                arr.push(b);
            }
        })
    })
    return arr;
}

function getNumberSeven () {
    const arr = [];
    const agustus = 8;
    const year2 = 2019;
    json.forEach(a => {
        a.articles.forEach(b => {
            // console.log(b.title.indexOf('Tips'))
            const month = b.published_at.substr(5, 2);
            const year1 = b.published_at.substr(0, 4);
            // console.log(year1);
            if (month < agustus && year1 <= year2) {
                arr.push(b);
            }
        })
    })
    return arr;
}


module.exports = {
    getNumberOne: getNumberOne,
    getNumberTwo: getNumberTwo,
    getNumberThree: getNumberThree,
    getNumberFour: getNumberFour,
    getNumberFive: getNumberFive,
    getNumberSix: getNumberSix,
    getNumberSeven: getNumberSeven
}