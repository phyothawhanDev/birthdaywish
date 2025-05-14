import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayPage from './components/BirthdayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
      </Routes>
    </Router>
  );
}

export default App;