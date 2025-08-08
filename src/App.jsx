import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import DataMigration from './pages/DataMigration';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>DataMug - PL/SQL Data Migration & Validation Tool</title>
          <meta name="description" content="Advanced PL/SQL data migration and validation tool for seamless database operations" />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data-migration" element={<DataMigration />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App; 