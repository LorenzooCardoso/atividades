import React, { useState } from 'react';

function ToggleTexto() {
    const [mostrarTexto, setMostrarTexto] = useState(true);

    const alternarTexto = () => {
        setMostrarTexto(!mostrarTexto);
    };

    return (
      <>
        <button onClick={alternarTexto}>
            Alterar Texto
        </button>
        {mostrarTexto ? <p> Texto A</p> : <p> Texto B</p>}
      </>  
    );
}

export default ToggleTexto;