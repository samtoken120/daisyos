import type { FC } from 'react';
import Hero from './components/Hero';
import About from './components/About';

import MCPSection from './components/MCPSection';
import Navbar from './components/Navbar';
import './App.css';

const App: FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="content-wrapper">
          <About />
        <MCPSection />
        <footer className="footer">
          © Cleothe The First AI OS. Crafted with magic. ✨
        </footer>
      </div>
    </div>
  );
};

export default App;
