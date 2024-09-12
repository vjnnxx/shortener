function Form ({handler}){

    const handleSubmit = (e) =>{
        e.preventDefault();
        handler(e.target.url.value);
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" placeholder="Insira a url a ser encurtada"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;