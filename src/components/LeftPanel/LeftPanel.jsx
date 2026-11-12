import { ArrowRight, UserRoundPlus, Users, Cpu, Rocket, Sparkles } from "lucide-react";
import "./LeftPanel.css";

function LeftPanel() {
  return (
    <section className="left-panel" id="home">
      <div className="left-panel-content">
        <div className="left-panel-badge">
          <Sparkles size={14} />
          <span>Meet LAX</span>
        </div>

        <h1>
          Hi, I’m <span className="left-panel-name">LAX</span>{" "}
          <span className="left-panel-wave">👋</span>
        </h1>

        <h2>Your Personal AI Companion</h2>

        <p className="left-panel-description">
          I can help you control your devices, automate tasks, answer your
          questions, and make your digital life smarter and easier.
        </p>

        <div className="left-panel-actions">
          <a className="left-panel-button left-panel-button-primary" href="#features">
            Get Started <ArrowRight size={16} />
          </a>

          <a className="left-panel-button left-panel-button-outline" href="#registration">
            <UserRoundPlus size={16} />
            Register Now
          </a>
        </div>

        <div className="left-panel-stats">
          <div className="left-panel-stat">
            <Users size={21} />
            <strong>1,200+</strong>
            <span>Registered Users</span>
          </div>

          <div className="left-panel-stat">
            <Cpu size={21} />
            <strong>10+</strong>
            <span>Smart Features</span>
          </div>

          <div className="left-panel-stat">
            <Rocket size={21} />
            <strong>99.9%</strong>
            <span>Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftPanel;