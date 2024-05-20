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
import RoomPage from './pages/Room/index.jsx'

function App() {
  const { authUser } = useAuthContext();

  return (
      <div className="">
        <div className="w-screen">
          <Routes>
            <Route path="/solo" element={<SoloStudyPage />} />
            <Route path="/group" element={<StudyGroupPage />} />
            <Route path="/home" element={authUser?<Home />:<Navigate to="/login"/>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
          <Toaster />
        </div>
      </div>
  );
}

export default App;
