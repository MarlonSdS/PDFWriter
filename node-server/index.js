var Reader = require('./classes/Reader')
var fs = require('fs')

var leitor = new Reader();
fs.writeFile('./content.txt', 'aklsasahsfkahf 12345', (err) =>{
    console.log(err)
})

leitor.Read('./content.txt')