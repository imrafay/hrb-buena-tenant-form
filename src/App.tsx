import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormWizard from './components/ui/FormWizard';
import Submission from './components/ui/Submission';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-xl p-8 bg-white shadow-md">
          <Routes>
            <Route path="/" element={<FormWizard />} />
            <Route path="/user-info" element={<FormWizard />} />
            <Route path="/salary-selection" element={<FormWizard />} />
            <Route path="/summary" element={<FormWizard />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
