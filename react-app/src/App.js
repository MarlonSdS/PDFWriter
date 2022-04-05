import react from 'react'
import { useState } from 'react'
import api from './services/api'
import {Link} from 'react-router-dom'
export default function App(){
  var [file, setFile] = useState()

  function send(){
    var text = document.getElementById('text')
    var title = document.getElementById('title')
    var file = title.value
    setFile(file)
    api.post('/doc', {
      html: `${text.value}`,
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

  return(
    <div className='app'>
      <input id='title' type='text'/>
      <textarea id='text'>

      </textarea>
      <button onClick={send}>enviar</button>
    </div>
  )
}
//<Link to={`localhost:8080/doc/${file}.pdf`} target='_blank'>Salvar arquivo</Link>