import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import React from 'react'

function App() {
  return (
    <div className="App">
          <script src="http://localhost:8097"></script>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
         </header>
    </div>
  );
}

export default App;
