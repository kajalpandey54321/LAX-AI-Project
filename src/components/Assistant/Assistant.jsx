import "./Assistant.css";
import { AudioLines } from "lucide-react";

function Assistant() {
  return (
    <section className="hero-center">

      {/* Neon Rings */}
      <div className="girl-ring ring-blue"></div>
      <div className="girl-ring ring-purple"></div>

      {/* Assistant Image */}
      <div className="girl-image">
        <img
          src="/lax-girl.jpg"
          alt="LAX AI Companion"
        />
      </div>

      {/* Greeting Bubble */}
      <div className="greeting-bubble">

        <div className="greeting-top">
          <AudioLines size={22} />

          <div>
            <p>Hello! I'm LAX,</p>
            <p>your AI companion. 👋</p>
          </div>
        </div>

        <p className="greeting-message">
          New here? Let me guide you to
          create an account and explore
          all the features.
        </p>

        <span className="bubble-arrow"></span>

      </div>

    </section>
  );
}

export default Assistant;