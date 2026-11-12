import "./ActionCard.css";
import { motion } from "framer-motion";

function ActionCard({ action }) {
  const Icon = action.icon;

  return (
    <motion.div
      className="action-card"
      whileHover={{
        y: -5,
        scale: 1.02
      }}
      transition={{ duration: 0.2 }}
      onClick={action.onClick}
    >

      <div className="action-icon">
        <Icon size={23} />
      </div>

      <h3>{action.title}</h3>

      <p>{action.description}</p>

      <span className="action-arrow">↗</span>

    </motion.div>
  );
}

export default ActionCard;