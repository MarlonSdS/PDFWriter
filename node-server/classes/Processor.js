var HtmlParser = require('./HtmlParser')
var PdfConversor = require('./PdfConversor')


class Processor{
    

    main(filename, html){
        var html = new HtmlParser()
        var pdf = new PdfConversor()

        html.HtmlParse()
        
    }
}