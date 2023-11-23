import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import JIRA from './JIRA/JIRApage';
import DSU from './DSU/DSU';
import Retro from './Retro/Retro';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jira" element={<JIRA />}/>
          <Route path="/dsu" element={<DSU />}/>
          <Route path="/retro" element={<Retro />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
