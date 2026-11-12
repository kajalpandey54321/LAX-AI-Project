import "./Assistant.css";
import { motion } from "framer-motion";
import { AudioLines } from "lucide-react";

function Assistant() {
  return (
    <section className="hero-center">

      <div className="girl-ring ring-blue"></div>
      <div className="girl-ring ring-purple"></div>

      <motion.div
        className="girl-image"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="/lax-girl.jpg"
          alt="LAX AI Companion"
        />
      </motion.div>

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