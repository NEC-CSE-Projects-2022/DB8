import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Test } from './pages/Test';
import { Contact } from './pages/Contact';
import { Creators } from './pages/Creators';
import { Toaster } from './components/ui/sonner';
import '@/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col bg-white transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;