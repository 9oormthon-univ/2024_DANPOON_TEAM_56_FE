import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from "./Login/Login";
import Home from "./Home/Home";
import LevelButtonsPage from './LevelButtonsPage/LevelButtonsPage';
import MissionRoadMap from './MissionRoadMap/MissionRoadMap';
import MissionPage from './MissionPage/MissionPage';
import Cookie from './Cookie/Cookie';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/levels" element={<LevelButtonsPage />} />
        <Route path="/missionroadmap" element={<MissionRoadMap />} />
        <Route path="/missionpage" element={<MissionPage />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>
    </Router>
  );
}

export default App;
