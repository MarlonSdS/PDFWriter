import react from 'react'
import { useState } from 'react'
import api from './services/api'
export default function App(){
  var [file, setFile] = useState()

  function send(){
    var text = document.getElementById('text')
    var title = document.getElementById('title')
    api.post('/doc', {
      html: `${text.value}`,
      filename:`${title.value}`
    }).then(res =>{
      console.log(res)
      setFile(res.data)
    }).catch(err =>{
      console.log(err)
    })
  }

  return(
    <div className='app'>
      <input id='title' type='text'/>
      <textarea id='text'>

      </textarea>
      <button onClick={send}>enviar</button>
      <div>
        {file}
      </div>
    </div>
  )
}