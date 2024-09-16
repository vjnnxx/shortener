import Icon from '@mdi/react';
import { mdiReload } from '@mdi/js';

function Result () {
    
    return (
        <div className="result">
            <p>Resultados:</p>
            <Icon path={mdiReload} size={1} />
        </div>
    )
}

export default Result;