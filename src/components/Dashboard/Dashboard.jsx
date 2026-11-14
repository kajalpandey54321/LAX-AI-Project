
import {
  LayoutDashboard,
  Bot,
  Cpu,
  BarChart3,
  Settings,
  ShieldCheck,
  HelpCircle,
  Bell,
  Wifi,
  BatteryFull,
  Zap,
  Activity,
  Mic,
  Clock,
  CheckCircle2,
  Monitor,
  Smartphone,
  Cloud,
  ArrowUpRight,
  CircleDot,
  Power
} from "lucide-react";

import Navbar from "../Navbar/Navbar";
import Assistant from "../Assistant/Assistant";
import VoiceControl from "../VoiceControl/VoiceControl";

import "./Dashboard.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Bot, label: "AI Assistant" },
  { icon: Cpu, label: "IoT Control" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" }
];

const activities = [
  {
    icon: Mic,
    title: "Voice command executed",
    detail: "Turn on bedroom lights",
    time: "2 minutes ago",
    color: "purple"
  },
  {
    icon: Smartphone,
    title: "Device connected",
    detail: "Android device connected",
    time: "15 minutes ago",
    color: "blue"
  },
  {
    icon: ShieldCheck,
    title: "Security scan completed",
    detail: "No threats detected",
    time: "30 minutes ago",
    color: "green"
  },
  {
    icon: Cloud,
    title: "Cloud sync completed",
    detail: "All files synchronized",
    time: "1 hour ago",
    color: "cyan"
  }
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-main">

        {/* LEFT SIDEBAR */}

        <aside className="dashboard-sidebar">

          <div className="sidebar-heading">
            <span className="sidebar-dot"></span>
            WORKSPACE
          </div>

          <nav className="sidebar-menu">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  href="#"
                  key={index}
                  className={`sidebar-link ${
                    item.active ? "selected" : ""
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>

                  {item.active && (
                    <span className="active-indicator" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="sidebar-divider"></div>

          <div className="sidebar-heading">
            PREFERENCES
          </div>

          <a
            href="#"
            className="sidebar-link"
            onClick={(e) => e.preventDefault()}
          >
            <ShieldCheck size={18} />
            <span>Security Center</span>
          </a>

          <a
            href="#"
            className="sidebar-link"
            onClick={(e) => e.preventDefault()}
          >
            <HelpCircle size={18} />
            <span>Help & Support</span>
          </a>

          <div className="sidebar-bottom">

            <div className="upgrade-card">
              <Zap size={23} />
              <h4>Upgrade LAX</h4>
              <p>Unlock more AI possibilities.</p>

              <button>
                Explore More
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="profile-card">
              <div className="profile-avatar">K</div>

              <div>
                <h4>Kajal</h4>
                <p>Free Account</p>
              </div>

              <Settings size={17} />
            </div>

          </div>

        </aside>

        {/* CENTER ASSISTANT */}

        <section className="dashboard-center">

          <div className="center-top-status">
            <span className="online-dot"></span>
            LAX AI IS ONLINE
          </div>

          <div className="assistant-wrapper">
            <Assistant />
          </div>

          <div className="center-caption">
            <h2>Your AI Companion</h2>
            <p>Always ready to assist you.</p>
          </div>

        </section>

        {/* RIGHT DASHBOARD CONTENT */}

        <section className="dashboard-content">

          <header className="dashboard-header">

            <div>
              <p className="dashboard-date">
                YOUR PERSONAL SPACE
              </p>

              <h1>
                Welcome back, <span>Kajal!</span>
              </h1>

              <p className="dashboard-subtitle">
                Here's what's happening with your LAX AI today.
              </p>
            </div>

            <button
              className="notification-button"
              aria-label="Notifications"
            >
              <Bell size={19} />
              <span></span>
            </button>

          </header>

          {/* SYSTEM OVERVIEW */}

          <div className="section-title">
            <h3>System Overview</h3>

            <span>
              <CircleDot size={13} />
              Live Status
            </span>
          </div>

          <div className="stats-grid">

            <div className="stat-card purple-card">
              <div className="stat-icon">
                <Mic size={20} />
              </div>
              <p>Voice Commands</p>
              <h2>248</h2>
              <span>+12% this week</span>
            </div>

            <div className="stat-card blue-card">
              <div className="stat-icon">
                <Activity size={20} />
              </div>
              <p>Active Services</p>
              <h2>08</h2>
              <span>All services running</span>
            </div>

            <div className="stat-card cyan-card">
              <div className="stat-icon">
                <Wifi size={20} />
              </div>
              <p>Network Status</p>
              <h2>98.5%</h2>
              <span>Excellent connection</span>
            </div>

            <div className="stat-card green-card">
              <div className="stat-icon">
                <BatteryFull size={20} />
              </div>
              <p>Battery Level</p>
              <h2>85%</h2>
              <span>Power is healthy</span>
            </div>

          </div>

          {/* CONNECTED DEVICES */}

          <div className="section-title">
            <h3>Connected Devices</h3>
            <a href="#devices">
              View All <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="device-grid" id="devices">

            <div className="device-card">
              <div className="device-icon">
                <Monitor size={23} />
              </div>

              <div>
                <h4>My Laptop</h4>
                <p>
                  <span className="online-dot"></span>
                  Connected
                </p>
              </div>

              <Power size={17} />
            </div>

            <div className="device-card">
              <div className="device-icon">
                <Smartphone size={23} />
              </div>

              <div>
                <h4>My Smartphone</h4>
                <p>
                  <span className="online-dot"></span>
                  Connected
                </p>
              </div>

              <Power size={17} />
            </div>

          </div>

          {/* QUICK ACTIONS */}

          <div className="section-title">
            <h3>Quick Actions</h3>
          </div>

          <div className="quick-actions">

            <button>
              <Mic size={19} />
              <span>Voice Command</span>
            </button>

            <button>
              <Cpu size={19} />
              <span>Control Devices</span>
            </button>

            <button>
              <BarChart3 size={19} />
              <span>View Analytics</span>
            </button>

          </div>

          {/* RECENT ACTIVITY */}

          <div className="section-title">
            <h3>Recent Activity</h3>
          </div>

          <div className="activity-card">

            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div className="activity-item" key={index}>

                  <div className={`activity-icon ${activity.color}`}>
                    <Icon size={18} />
                  </div>

                  <div className="activity-info">
                    <h4>{activity.title}</h4>
                    <p>{activity.detail}</p>
                  </div>

                  <span className="activity-time">
                    <Clock size={12} />
                    {activity.time}
                  </span>

                </div>
              );
            })}

          </div>

          {/* AI ENGINE STATUS */}

          <div className="section-title">
            <h3>AI Engine Status</h3>
          </div>

          <div className="engine-card">

            <div className="engine-heading">
              <div>
                <span className="online-dot"></span>
                LAX Intelligence Engine
              </div>

              <span className="engine-active">
                ACTIVE
              </span>
            </div>

            <div className="engine-progress">
              <div></div>
            </div>

            <div className="engine-footer">
              <span>System Performance</span>
              <strong>92%</strong>
            </div>

          </div>

          {/* SECURITY */}

          <div className="security-card">

            <ShieldCheck size={23} />

            <div>
              <h4>Your system is protected</h4>
              <p>All security checks are up to date.</p>
            </div>

            <CheckCircle2 size={20} />

          </div>

        </section>

      </main>

      <VoiceControl />

    </div>
  );
}

export default Dashboard;
