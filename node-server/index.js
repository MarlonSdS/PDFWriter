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

//objetos que irão tratar a manipulação de documentos
var parser = new HtmlParser
var pdf = new PdfConversor
var leitor = new Reader

//permite a manipulção de jsons
app.use(express.json())

//rota raiz
app.get('/', (req, res) =>{
    res.send('olá')

})

//rota que recebe o texto 
app.post('/doc', (req, res) =>{
    var {filename, html} = req.body

    pdf.WritePdf(html, filename)

    res.sendStatus(200)
})

//rota que envia o pdf pronto para download
app.get('/doc/:filename', (req, res) =>{
    var filename = req.params.filename
    console.log(filename)
    res.download(__dirname+'/pdf/'+filename+'.pdf')
})

//hostear na porta 8080
app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080')
})
