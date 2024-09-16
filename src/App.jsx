import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  async function shortenUrl(url) {
    const request = {
      url: url,
    };
      
      const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    };

    setLoading(true);

    fetch('https://url-shortener-jjho.onrender.com/shorten', options)
    .then(response => {

      // exibir mensagens e link encurtado na tela

      if (response.status === 200) console.log('Já tava criado pae'); 
      if (response.status === 201) console.log('Link encurtado com sucesso');
      if (response.status === 400) console.log('Dados inválidos');
      

      setResult(true);

      setLoading(false);
      return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  return (
      <>
      {loading == false ? (

        result == false ? (
          <div className='main'>

          <h1>Encurtador de url</h1>
          <p>Insira a URL a ser encurtada</p>
          <Form handler={shortenUrl}></Form>
        </div>
        ) : (
          <div className="main">
            <Result></Result>
          </div>
        )
        
      ) : (
        <div className="main">
          <h2>Carregando</h2>
          <div className='spinner'></div>
        </div>
      )}
      </>
    
  )
}

export default App
