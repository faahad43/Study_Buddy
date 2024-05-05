import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoloStudyPage from "./pages/SoloStudy.jsx";
import StudyGroupPage from "./pages/GroupStudy.jsx";
import StatsPage from "./pages/Stats.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/solo" element={<SoloStudyPage />} />
          <Route path="/group" element={<StudyGroupPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
