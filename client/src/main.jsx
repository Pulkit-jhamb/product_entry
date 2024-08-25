import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ConfirmationPage from './confirmationpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Main form page */}
      <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Confirmation page */}
    
    </Routes>
  </Router>
);
