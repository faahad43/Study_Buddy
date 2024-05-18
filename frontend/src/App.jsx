<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoloStudyPage from "./pages/SoloStudy.jsx";
import StudyGroupPage from "./pages/GroupStudy.jsx";
import StatsPage from "./pages/Stats.jsx";

import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SoloStudyPage from './pages/SoloStudy';
import StudyGroupPage from './pages/GroupStudy';
import Sidebar from './components/Sidebar.jsx';
import Chat from './pages/chat.jsx';
import Dashboard from './pages/dashboard.jsx';
import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
>>>>>>> 102ba8b295d1c3b630c2e9208e808454b292a9f5

function App() {
  const { authUser } = useAuthContext();

  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Routes>
          <Route path="/solo" element={<SoloStudyPage />} />
          <Route path="/group" element={<StudyGroupPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
=======
      <div className="">
        <div className="w-screen">
          <Routes>
            <Route path="/solo" element={<SoloStudyPage />} />
            <Route path="/group" element={<StudyGroupPage />} />
            <Route path="/home" element={authUser?<Home />:<Navigate to="/login"/>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={authUser? <Navigate to="/chat"/> :<Login />} />
            <Route path="/registration" element={authUser ? <Navigate to="/chat"/> : <Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Toaster />
        </div>
>>>>>>> 102ba8b295d1c3b630c2e9208e808454b292a9f5
      </div>
  );
}

export default App;
