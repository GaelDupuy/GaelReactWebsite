import React from 'react';
import SearchBox from './SearchBox';
import Facets from './Facets.js';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Faceted Search</h1>
        <SearchBox />
      </header>
      <main style={{ display: 'flex' }}>
        <Facets />
        <div className="results">
          {/* Placeholder for search results */}
          <p>Search results will be displayed here.</p>
        </div>
      </main>
    </div>
  );
};

export default App;