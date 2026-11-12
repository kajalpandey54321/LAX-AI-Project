import Navbar from "./components/Navbar/Navbar";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Assistant from "./components/Assistant/Assistant";
import VoiceControl from "./components/VoiceControl/VoiceControl";

import "./App.css";

function App() {
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

export default App;