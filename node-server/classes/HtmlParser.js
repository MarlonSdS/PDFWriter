var fs = require('fs')
var util = require('util')

class HtmlParser{

    HtmlParse(filename, html){
       fs.writeFile('html/' + filename + '.html', html, (err, data) =>{
           if(err){
               console.log(err)
           }
       })
        
    }
}

module.exports = HtmlParser