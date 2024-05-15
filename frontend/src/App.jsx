import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import SoloStudyPage from "./pages/SoloStudy";
import StudyGroupPage from "./pages/GroupStudy";
import Sidebar from "./components/Sidebar.jsx";
import Chat from "./pages/chat.jsx";
=======
import SoloStudyPage from "./pages/SoloStudy.jsx";
import StudyGroupPage from "./pages/GroupStudy.jsx";
import StatsPage from "./pages/Stats.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
>>>>>>> origin/main

function App() {
  return (
    <Router>
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/solo" element={<SoloStudyPage />} />
          <Route path="/group" element={<StudyGroupPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/home" element={<Home />} />
<<<<<<< HEAD
          <Route path="/chat" element={<Chat />} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          
>>>>>>> origin/main
        </Routes>
      </div>
    </Router>
  );
}

export default App;
