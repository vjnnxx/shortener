import { useState } from 'react'
import './App.css'
import Form from './components/Form';

function App() {

  const [nome, setNome] = useState('');

  function changeNome(value) {
    setNome(value)
  }

  return (
    <div className='main'>
      <h1>Encurtador de url</h1>
      <Form handler={changeNome}></Form>

      <div>
        {nome}
      </div>
    </div>
  )
}

export default App
