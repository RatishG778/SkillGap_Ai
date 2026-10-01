import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/marketing/LandingPage";
import Copilot from "./pages/career/Copilot";
import Interview from "./pages/career/Interview";
import Jobs from "./pages/career/Jobs";
import Projects from "./pages/career/Projects";
import Resume from "./pages/career/Resume";
import Assessment from "./pages/student/Assessment";
import Dashboard from "./pages/student/Dashboard";
import Profile from "./pages/student/Profile";
import Roadmap from "./pages/student/Roadmap";
import SkillGapPage from "./pages/student/SkillGapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skills" element={<SkillGapPage />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/copilot" element={<Copilot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;