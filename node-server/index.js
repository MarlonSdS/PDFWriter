var Reader = require('./classes/Reader')
var HtmlParser = require('./classes/HtmlParser')
var PdfConversor = require('./classes/PdfConversor')
var fs = require('fs')
var express = require('express')
var bp = require('body-parser')
var app = express()

app.use(bp.urlencoded({extended: true}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var parser = new HtmlParser
var pdf = new PdfConversor
var leitor = new Reader

//permite a manipulção de jsons
app.use(express.json())

//rota raiz
app.get('/', (req, res) =>{
    res.send('olá')
    //res.sendFile(__dirname+'/pdf/hinamizawa.pdf')

})

app.post('/doc', (req, res) =>{
    var {filename, html} = req.body

    //var file = parser.HtmlParse(filename, html)
    pdf.WritePdf(html, filename)

    //res.sendStatus(200)
    res.sendFile(__dirname+'/pdf/+'+filename+'.pdf')
})

//hostear na porta 8080
app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080')
})

/*async function main(){

    //parser.HtmlParse(Date.now(), '<h1> Olá mundo </h1>')
    var html = await leitor.Read('html/teste.html')

    console.log(html)
    pdf.WritePdf(html, 'teste')
}

main()*/