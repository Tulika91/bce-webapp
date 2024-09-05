import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ShowDetailsPage from './pages/ShowDetailsPage';
import UnderConstruction from './pages/UnderConstructionPage';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Sidebar />
        
        {/* Main content area */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#000', color: 'white', overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/show/:id" element={<ShowDetailsPage />} />
            <Route path="/music" element={<UnderConstruction />} /> 
            <Route path="/movie" element={<UnderConstruction />} /> 
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

