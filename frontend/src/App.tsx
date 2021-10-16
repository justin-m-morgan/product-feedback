import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button, { ButtonOptions } from './ui/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App
