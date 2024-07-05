import react, { useState } from 'react';

function Contador() {
    let[contador, setContador] = useState(0);
    let incrementar = () => {
        setContador(contador + 1)
    }
    return(
        <>
        <button onClick={incrementar}>Contar</button>
        {contador}
        </>
    );
}

export default Contador;