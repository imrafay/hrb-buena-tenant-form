import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormWizard from './components/FormWizard';
import Submission from './components/Submission';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-xl p-8 bg-white shadow-md">
          <Routes>
            <Route path="/" element={<FormWizard />} />
            <Route path="/step1" element={<FormWizard />} />
            <Route path="/step2" element={<FormWizard />} />
            <Route path="/summary" element={<FormWizard />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
