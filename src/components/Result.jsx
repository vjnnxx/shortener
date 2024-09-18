
function Result ({title, content, handler}) {
    
    if (content != null){
        return (
            <div className="result">
                
                
                <div className='url-result'>
                    <h2>{title}</h2>
                    <a href={content} target="_blank">{content}</a>     
                </div>
    
                <button className="return" onClick={handler}>Voltar</button>
            </div>
        )
    }

    return (
        <div className="result">
            
            
            <div className='url-result'>
                <h2>{title}</h2>  
            </div>

            <button className="return" onClick={handler}>Voltar</button>
        </div>
    )
    
}

export default Result;