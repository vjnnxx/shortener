import '../index.css'


function Form ({handler}){

    const handleSubmit = (e) =>{
        e.preventDefault();
        handler(e.target.url.value);
        // Ativar função no App que consome a API e altera a exibição da página principal para exibir a resposta
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" className='url'/>
                <button type="submit" className='go'> Enviar </button>
            </form>
        </div>
    )
}

export default Form;