import React from 'react';
import './App.css';
import Conversor from "./componentes/conversor"

function App() {
  return (
    <div className="App flex-container">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
