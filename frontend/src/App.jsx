import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoloStudyPage from "./pages/SoloStudy";
import StudyGroupPage from "./pages/GroupStudy";
import Sidebar from "./components/Sidebar.jsx";
import Chat from "./pages/chat.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/solo" element={<SoloStudyPage />} />
          <Route path="/group" element={<StudyGroupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
