import react from 'react'
import { useState } from 'react'
import api from './services/api'
import {Link} from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import Header from './components/Header'
export default function App(){
  var [file, setFile] = useState()
  var [content, setContent] = useState()

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
    <div className='app'>
      <Header />
      <input id='title' type='text'/>
      <Editor
        apiKey='avujycwv7ph5dml1l5x77h2soy5p9po7brb5s25pu2rstdbv'
        initialValue="<p>Initial content</p>"
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
      <button onClick={send}>enviar</button>
    </div>
  )
}
//<Link to={`localhost:8080/doc/${file}.pdf`} target='_blank'>Salvar arquivo</Link>