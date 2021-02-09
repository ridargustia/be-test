const command = require('commander');
const { prompt } = require('inquirer');
const fs = require('fs');

fs.readFile('data/products.json', async function getJson(err, data){
    let choices = [];
    data = JSON.parse(data);

    if (err) console.log(err);

    data.forEach(d => choices.push(d.name));
    
    const questIdentity = [
        {
            type : 'input',
            name : 'restoName',
            message : 'Add restaurant name :'
        },
        {
            type : 'input',
            name : 'cashierName',
            message : 'Add cashier name :'
        }
        
    ];

    const questProducts = [
        {
            type: 'list',
            name: 'products',
            message: 'Produk yang dibeli:',
            choices: choices
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Ada pesanan lagi?'
        }
    ];

    command
        .version('1.0.0')
        .description('Payment Invoice System');

    command
        .command('add')
        .alias('a')
        .description('Add a Payment')
        .action(() => {
            prompt(questIdentity).then( answers => {
                const products = [];
                const total = [];
                loopingBlock();
                function loopingBlock () {
                    prompt(questProducts).then( answers2 => {
                        data.forEach(d => {
                            if (d.name === answers2.products) {
                                let char = '';
                                for (let i = 0; i < d.space; i++) {
                                    char = char + '.';
                                }
                                const value = {name: d.name, space: char, price: d.price};
                                
                                total.push(d.price);
                                products.push(value);
                            };
                        });
                        
                        if (answers2.confirmation === true) {
                            loopingBlock();
                            
                        }else{
                            //Mengambil tanggal dan waktu sekarang
                            const date = new Date();
                            let year = date.getFullYear();
                            let month = ("0"+(date.getMonth()+1)).substr(-2);
                            let day = ("0"+date.getDate()).substr(-2);
                            let hour = ("0"+date.getHours()).substr(-2);
                            let minutes = ("0"+date.getMinutes()).substr(-2);
                            let seconds = ("0"+date.getSeconds()).substr(-2);
                            const dateNow = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
                            //Mngeatur baris dan kolom pada payment receipt
                            console.info('');
                            let spaceTitle = '';
                            let spaceDate = '';
                            let spaceCashier = '';
                            let charRestoName = '';
                            let charMoreRestoName = '';
                            let charCashier = '';
                            let charMoreCashier = '';
                            const countCharTitle = answers.restoName.length + 13;
                            const countCharDate = dateNow.length + 10;
                            const countCharCashier = answers.cashierName.length + 13;
                            //Baris Title
                            if(countCharTitle <= 30){
                                let countColumn = 30 - countCharTitle;
                                countColumn = countColumn / 2;
                                countColumn = countColumn.toFixed();
                                
                                for (let i = 0; i < countColumn-1; i++) {
                                    spaceTitle = spaceTitle + '\u00A0';
                                }
                                charRestoName = answers.restoName;
                            }else{
                                charRestoName = answers.restoName.substring(0, 17);
                                charMoreRestoName = '\n' + answers.restoName.substr(17);
                            }
                            //Baris Date
                            if(countCharDate <= 30){
                                const countColumn = 30 - countCharDate;
                                
                                for (let i = 0; i < countColumn; i++) {
                                    spaceDate = spaceDate + '\u00A0';
                                }
                            }
                            //Baris Cashier
                            if(countCharCashier <= 30){
                                const countColumn = 30 - countCharCashier;
                                
                                for (let i = 0; i < countColumn; i++) {
                                    spaceCashier = spaceCashier + '\u00A0';
                                }
                                charCashier = answers.cashierName;
                            }else{
                                charCashier = answers.cashierName.substring(0, 17);
                                charMoreCashier = '\n' + answers.cashierName.substr(17);
                            }

                            console.info(`${spaceTitle}Warung Makan ${charRestoName}${charMoreRestoName}`);
                            console.info('');
                            console.info(`Tanggal : ${spaceDate}${dateNow}`);
                            console.info(`Nama Kasir : ${spaceCashier}${charCashier}${charMoreCashier}`);
                            console.info('==============================');
                            console.info('');
                            products.forEach((a, i) => console.info(`${a.name}${a.space}${a.price}`));
                            console.info('');
                            const hasil = total.reduce((acc, cur) => acc + cur);
                            const rowTotal = 30 - (hasil.toString().length + 5);
                            let char = '';
                            for (let i = 0; i < rowTotal; i++) {
                                char = char + '.';
                            }
                            console.info(`Total${char}${hasil}`);
                            console.info('');
                        }
                    });
                } 
            }); 
        });
    command.parse(process.argv);

});

