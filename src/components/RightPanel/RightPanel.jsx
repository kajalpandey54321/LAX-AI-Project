import {
  Infinity,
  Laptop,
  Smartphone,
  Zap,
  MessageCircle,
  ChevronRight,
  UserRoundPlus,
  ArrowRight,
} from "lucide-react";

import "./RightPanel.css";

function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="right-panel-content">
        <h2 className="right-panel-heading">
          <span className="right-panel-infinity">
            <Infinity size={21} />
          </span>
          <span>What can I do for you?</span>
        </h2>

        <div className="right-panel-features">
          <a className="right-panel-card" href="#control-laptop">
            <span className="right-panel-icon">
              <Laptop size={24} />
            </span>
            <span className="right-panel-card-text">
              <strong>Control Your Laptop</strong>
              <small>Open apps, run commands, and more</small>
            </span>
            <ChevronRight className="right-panel-chevron" size={17} />
          </a>

          <a className="right-panel-card" href="#manage-phone">
            <span className="right-panel-icon">
              <Smartphone size={24} />
            </span>
            <span className="right-panel-card-text">
              <strong>Manage Your Phone</strong>
              <small>Send messages, make calls, and automate</small>
            </span>
            <ChevronRight className="right-panel-chevron" size={17} />
          </a>

          <a className="right-panel-card" href="#smart-automation">
            <span className="right-panel-icon">
              <Zap size={24} />
            </span>
            <span className="right-panel-card-text">
              <strong>Smart Automation</strong>
              <small>Create your own AI workflows</small>
            </span>
            <ChevronRight className="right-panel-chevron" size={17} />
          </a>

          <a className="right-panel-card" href="#ai-assistant">
            <span className="right-panel-icon">
              <MessageCircle size={24} />
            </span>
            <span className="right-panel-card-text">
              <strong>AI Assistant</strong>
              <small>Ask anything, get instant help</small>
            </span>
            <ChevronRight className="right-panel-chevron" size={17} />
          </a>
        </div>

        <a className="right-panel-account" href="#registration">
          <span className="right-panel-account-icon">
            <UserRoundPlus size={24} />
          </span>

          <span className="right-panel-account-text">
            <strong>Create Your LAX Account</strong>
            <small>
              Register now to connect your devices
              <br />
              and unlock the full power of LAX.
            </small>
          </span>

          <span className="right-panel-account-arrow">
            <ArrowRight size={19} />
          </span>
        </a>
      </div>
    </aside>
  );
}

export default RightPanel;