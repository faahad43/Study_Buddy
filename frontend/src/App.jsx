import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoloStudyPage from "./pages/SoloStudy";
import StudyGroupPage from "./pages/GroupStudy";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/solo" element={<SoloStudyPage />} />
          <Route path="/group" element={<StudyGroupPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
