// /frontend/src/App.js

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import RequestQuote from './components/RequestQuote';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <RequestQuote />
    </div>
  );
}

export default App;
