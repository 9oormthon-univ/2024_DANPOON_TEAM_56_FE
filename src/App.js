import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import First from "./Login/Login";
import Home from "./Home/Home";
import LevelButtonsPage from './LevelButtonsPage/LevelButtonsPage';
import MissionRoadMap from './MissionRoadMap/MissionRoadMap';
import MissionPage from './MissionPage/MissionPage';
import Cookie from './Cookie/Cookie';

=======
import Login from "./Login/Login";
import Home from "./Home/Home";
import MissionLevel from './MissionLevel/MissionLevel';
import MissionRoadMap from './MissionRoadMap/MissionRoadMap';
import MissionPage from './MissionPage/MissionPage';
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/levels" element={<LevelButtonsPage />} />
        <Route path="/missionroadmap" element={<MissionRoadMap />} />
        <Route path="/missionpage" element={<MissionPage />} />
        <Route path="/cookie" element={<Cookie />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missionlevel" element={<MissionLevel />} />
        <Route path="/missionroadmap" element={<MissionRoadMap />} />
        <Route path="/missionpage" element={<MissionPage />} />
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
      </Routes>
    </Router>
  );
}

export default App;
