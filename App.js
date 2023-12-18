import React from 'react';
import './App.css';
import PortfolioPage from './pages/PortfolioPage';
// Import other components, like BurgerMenu if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="brand-container">
          {/* Add your logo or name here */}
          <h1>This site is built to demo Jeremy's Portfolio</h1>
          
        </div>
        
      </header>
      <main>
      <PortfolioPage />
      </main>
    </div>
  );
}

export default App;

