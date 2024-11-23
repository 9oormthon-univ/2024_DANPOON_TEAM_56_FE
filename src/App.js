import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import Home from "./Home/Home";
import MissionLevel from './MissionLevel/MissionLevel';
import MissionRoadMap from './MissionRoadMap/MissionRoadMap';
import MissionPage from './MissionPage/MissionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missionlevel" element={<MissionLevel />} />
        <Route path="/missionroadmap" element={<MissionRoadMap />} />
        <Route path="/missionpage" element={<MissionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
