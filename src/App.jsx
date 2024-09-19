import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function shortenUrl(url) {
    const request = {
      url: url,
    };
      
      const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'mode': 'no-cors',
      },
      body: JSON.stringify(request),
    };

    setLoading(true);

    fetch('https://url-shortener-jjho.onrender.com/shorten', options)
    .then(response => {

      if (response.status === 200 || response.status === 201) {
        setTitle('Aqui está: '); 
      }

      if (response.status === 400) {
        setTitle('URL inválida :(');
        setContent('Insira uma url válida!');
      }

      setResult(true);

      setLoading(false);
      return response.json()
    })
    .then((data) => {
      setContent(data.short_url);
      console.log(data.short_url)
    })
    .catch(error => console.log(error));
  }

  function refresh (){
    setResult(false);
    setContent('');
    setResult('');
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
            <Result title={title} content={content} handler={refresh}></Result>
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
