# PDFWriter
An text editor that saves in PDF.

Um editor de textos que salva em formato PDF.

## Como iniciar
Para poder executar o aplicativo em sua máquina você deve ter o Node JS
instalado.
Cumprindo este requisito, primeiro é preciso iniciar o servidor e depois a
aplicação. Primeiro abra a pasta **node-server** e dentro desta abra o terminal de
seu sistema operacional. No terminal rode o seguinte comando:
`node index`
Pronto, se tudo correu bem você deverá ver uma mensagem dizendo 
__servidor iniciado na porta 8080,__ agora o servidor está ativo. Agora é preciso 
iniciar o aplicativo react que é o front end. Volte para a raiz do projeto e abra
a pasta **react-app**. Execute outro terminal e rode o seguinte comando:
`npm start`
E pronto, a aplicação estará rodando em seu navegador. O editor de texto é intuitivo,
você pode redigir um texto utilizando todos os recursos que normalente usaria em um ms word
ou google docs da vida. Clicando no botão salvar PDF o arquivo será baixado na pasta padrão
que você configurou em seu navegador.

## Como isso funciona
O editor de texto é o framework [tiny-mce](https://www.tiny.cloud/) que pode ser usado em qualquer projeto web, mas
é primeiro se cadastrar no site da ferramenta.
O editor gera um código html simples. Este html é enviado para o back-end pelo http.
No back-end a conversão de html para pdf ocorre através da biblioteca javascript [htm-pdf](https://www.npmjs.com/package/html-pdf?activeTab=readme)