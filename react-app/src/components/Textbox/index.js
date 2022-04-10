import React from "react";
//styled components
import {Title, Container, Mainbox, Sendbutton} from './style'

import { useState } from 'react'
import api from '../../services/api'//arquivo de conexão com o backend
import {Editor} from '@tinymce/tinymce-react'


export default function Textbox(){
  //states usadas para guardar o conteúdo de texto
    var [file, setFile] = useState()
  var [content, setContent] = useState()

  //função responsável por enviar o texto para o backend
  function send(){
    var text = content
    var title = document.getElementById('title')
    var file = title.value
    setFile(file)
    api.post('/doc', {
      html: `${text}`,
      filename:`${title.value}`
    })
    setTimeout(() =>{
      var file = document.getElementById('title')
      window.location.href = `http://localhost:8080/doc/${file.value}`
    }, 2000)
  }

 /* function save(){
    var file = document.getElementById('title')
    window.location.href = `http://localhost:8080/doc/${file.value}`
  }*/
  function handleEditorChange(e){
    setContent(e.target.getContent())
  }

    return(
        <Container>
            <Title placeholder="Titulo do documento" id="title"/>
            <Mainbox>
                <Editor
                apiKey='avujycwv7ph5dml1l5x77h2soy5p9po7brb5s25pu2rstdbv'
                initialValue=""
                init={{
                height: 700,
                width: 950,
                menubar: 'insert',
                language: 'pt_BR',
                plugins: [
                    'advlist autolink link image lists print preview hr searchreplace wordcount fullscreen insertdatetime media save table paste emoticons',
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount', 'image'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent table| help | \
                    image lists print preview hr searchreplace wordcount fullscreen insertdatetime media save table paste emoticons'
                }}
                onChange={handleEditorChange}
            />
            <Sendbutton onClick={send}>Salvar PDF</Sendbutton>
            </Mainbox>
        </Container>

    )
}