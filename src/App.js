import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; // Importe o NavBar corretamente
import ItemListContainer from './components/ItemListContainer'; // Importe o ItemListContainer corretamente

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja!" /> {/* Use o ItemListContainer */}
      <header className="App-header">
        <p>
          Bem-vindo à loja!
        </p>
      </header>
    </div>
  );
}

export default App;
