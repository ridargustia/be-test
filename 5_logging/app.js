const { config } = require('./src/config');
const log4js = require('log4js');
const fs = require('fs');
const crypto = require('crypto');
const view = require('swig');
const http = require('http'); //deklarasi library atau module
const url = require('url');   //deklarasi library atau module
const router = require('routes')();   //deklarasi library atau module

let jsonString = '{"value":[]}';
fs.writeFile('data/data.json', jsonString, err => {
    if (err) throw err;
});

let count = 0;

router.addRoute('/', (req, res) => {

    if(req.method.toUpperCase() == "POST"){
        
        fs.readFile('data/data.json', (err, data) => {
        
            data = JSON.parse(data);
            
            if (err) {
                console.log(err);
            }else if (data.value.length === 0){
                count = 0;
            }else if (data.value.length === 1){
                count = data.value[0];
            }else{
                count = data.value[data.value.length - 1];
                
            }
            // console.log(count);
            function randomValue(len) {
                return crypto
                .randomBytes(Math.ceil((len * 3) / 4))
                .toString('base64') 
                .slice(0, len) 
                .replace(/\+/g, '0') 
                .replace(/\//g, '0') 
            }
            const random = randomValue(8);    
            count = count + 1;

            log4js.configure({
                appenders: {fileAppender: {type: 'file', filename: './server.log'}},
                categories: {default: {appenders: ['fileAppender'], level: 'info'}}
            });
            
            //Create the logger
            const logger = log4js.getLogger();

            //Log message
            logger.info(`Success: ${req.method} http://localhost:${config.port} {"counter": ${count}, "X-RANDOM": ${random}}`);
            
            data.value.push(count);
            jsonString = JSON.stringify(data);

            fs.writeFile('data/data.json', jsonString, err => {
                if (err) throw err;
                // res.send(jsonString);
                res.writeHead(302, {"Location" : "/"});
                res.end();
            });
        });

    }else{
        const html = view.compileFile("./src/view/form.html")();
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(html);
    }

});

http.createServer(function(req, res){
    var path = url.parse(req.url).pathname; //Mengambil pathname dari request url
    var match = router.match(path); //Mencocokkan path dengan yg ada di routing

    if(match){  //jika cocok maka masuk
        match.fn(req, res);
    }else{  //jika tidak cocok maka masuk
        res.writeHead(404, {"Content-Type" : "text/plain"});
        res.end("Page not found");
    }

    
}).listen(config.port); 

// app.listen(config.port);
console.log(`App listening on http://localhost:${config.port}`);
