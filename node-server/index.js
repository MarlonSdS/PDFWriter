var Reader = require('./classes/Reader')
var HtmlParser = require('./classes/HtmlParser')
var PdfConversor = require('./classes/PdfConversor')
var fs = require('fs')
var express = require('express')
var bp = require('body-parser')
var app = express()

app.use(bp.urlencoded())

var parser = new HtmlParser
var pdf = new PdfConversor
var leitor = new Reader

//permite a manipulção de jsons
app.use(express.json())

//rota raiz
app.get('/', (req, res) =>{
    return res.send('olá')
})

app.post('/doc', (req, res) =>{
    var {filename, html} = req.body

    parser.HtmlParse(filename, html)

    res.sendStatus(200)
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