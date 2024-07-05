import React, { useState } from 'react';

function Lista() {
    const tasks=[
    { id: 1, text: 'Aprender React'},
    { id: 2, text: 'Construir um projeto simples'},
    { id: 3, text: 'Entender Promps e State'}
  ];

    return(
      <div className="tasks">
          <ul>{Listatasks}</ul>
      </div>
    );
  }
  
  export default Lista;