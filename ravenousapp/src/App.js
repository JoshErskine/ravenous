import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ravenous
        </a>
      </header>
      <main>
        <h1>Ravenous</h1>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
