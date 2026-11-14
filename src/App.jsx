
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Assistant from "./components/Assistant/Assistant";
import VoiceControl from "./components/VoiceControl/VoiceControl";

// import Dashboard from "./components/Dashboard/Dashboard";
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";

function Home() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-layout">
        <section className="left-section">
          <LeftPanel />
        </section>

        <section className="center-section">
          <Assistant />
        </section>

        <section className="right-section">
          <RightPanel />
        </section>
      </main>

      <VoiceControl />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
