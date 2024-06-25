import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Bem-vindo à loja!
        </p>
      </header>
    </div>
  );
}

export default App;
