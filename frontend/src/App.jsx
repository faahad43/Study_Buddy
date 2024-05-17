import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoloStudyPage from "./pages/SoloStudy";
import StudyGroupPage from "./pages/GroupStudy";
import Sidebar from "./components/Sidebar.jsx";
import Chat from "./pages/chat.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <div className="">
        <div className="w-screen">
          <Routes>
            <Route path="/solo" element={<SoloStudyPage />} />
            <Route path="/group" element={<StudyGroupPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
