// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
       
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
