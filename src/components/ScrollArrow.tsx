import { motion } from "framer-motion";

export default function ScrollArrow() {
  return (
    <div className="z-10">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="cursor-pointer group"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-blue-900 hover:stroke-blue-700 dark:stroke-cyan-400 dark:hover:stroke-cyan-300 transition duration-300"
        >
          <path
            d="M16 14 L24 22 L32 14"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24 L24 32 L32 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
