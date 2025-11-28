// App.jsx
import React, { useState } from 'react';
import JobList from './Cardsprops';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="header-content">
          <h1>💼 JobFinder</h1>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        <p>Discover amazing career opportunities</p>
      </header>
      
      <main className="main-content">
        <div className="container">
          <JobList />
        </div>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 JobFinder. Connecting talent with opportunity.</p>
      </footer>
    </div>
  );
}

export default App;