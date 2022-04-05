var fs = require('fs')
var pdf = require('html-pdf')

class PdfConversor{
    async WritePdf(html, filename){
        await pdf.create(html, {}).toFile('pdf/' + filename + '.pdf', function(err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
          });
    }
}

module.exports =PdfConversor