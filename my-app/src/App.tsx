// src/App.tsx
import React, { useState, useEffect } from 'react';
import api from './services/api';
import { v4 as uuidv4 } from 'uuid';
interface Pessoa {
  id: string;
  nome: string;
  idade: number;
}

const App: React.FC = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  useEffect(() => {
    // Função para carregar dados da API no carregamento do componente
    const carregarDados = async () => {
      try {
        const response = await api.get('/pessoas');
        setPessoas(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
      }
    };

    carregarDados();
  }, []);

  const adicionarPessoa = async () => {
    try {
      const novaPessoa = { id: uuidv4(), nome: 'Nova Pessoa', idade: 25 };
      await api.post('/pessoas', novaPessoa);
      setPessoas([...pessoas, novaPessoa]);
    } catch (error) {
      console.error('Erro ao adicionar pessoa:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
      <button onClick={adicionarPessoa}>Adicionar Pessoa</button>
    </div>
  );
};

export default App;
