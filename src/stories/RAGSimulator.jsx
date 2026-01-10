import React, { useState } from 'react';
import './RAGSimulator.css'; // Criaremos este logo abaixo

const MOCK_DATABASE = [
  { id: 1, text: "RAG combina recuperação de dados com geração de texto por LLMs." },
  { id: 2, text: "Bancos de vetores são essenciais para buscas semânticas eficientes." },
  { id: 3, text: "O 'Augmented' no RAG significa fornecer contexto externo à IA." }
];

export const RAGSimulator = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = MOCK_DATABASE.find(doc => 
      doc.text.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found ? found.text : "Nenhum documento relevante encontrado na base.");
  };

  return (
    <div className="rag-container">
      <h3>🔍 Simulador de Recuperação (Retrieval)</h3>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Ex: banco de vetores..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Consultar Base</button>
      </div>
      {result && (
        <div className="result-area">
          <p><strong>Contexto Recuperado:</strong> {result}</p>
          <div className="ai-response">
            <small>A IA agora usaria esse trecho acima para gerar uma resposta precisa.</small>
          </div>
        </div>
      )}
    </div>
  );
};