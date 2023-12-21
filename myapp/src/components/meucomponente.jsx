import React, { useState } from 'react';

const MeuComponente = () => {
  // Utilize o useState para declarar uma variável de estado
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default MeuComponente;
