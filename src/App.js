import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import UpladForm from './pages/upload/UpladForm';
import Tasks from './pages/TaskList/TaskList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UpladForm />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
