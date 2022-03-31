var Reader = require('./classes/Reader')
var HtmlParser = require('./classes/HtmlParser')
var PdfConversor = require('./classes/PdfConversor')
var fs = require('fs')

var parser = new HtmlParser
var pdf = new PdfConversor
var leitor = new Reader

async function main(){

    //parser.HtmlParse(Date.now(), '<h1> Olá mundo </h1>')
    var html = await leitor.Read('html/teste.html')

    console.log(html)
    pdf.WritePdf(html, 'teste')
}

main()