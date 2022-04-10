import react from 'react'
import { useState } from 'react'
import api from './services/api'
//componentes
import Header from './components/Header'
import Textbox from './components/Textbox'
export default function App(){

  //definindo alguns metas
  document.title = 'PDFWriter'

  return(
    <div className='app'>
      <Header />
      <Textbox />
    </div>
  )
}