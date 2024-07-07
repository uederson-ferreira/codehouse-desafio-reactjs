import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
      <ItemDetailContainer />
      <header className="App-header">
        <p>
          Bem-vindo à loja!
        </p>
      </header>
    </div>
  );
}

export default App;
