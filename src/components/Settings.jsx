import { motion } from "framer-motion";

const Settings = () => {
  return (
    <div className="container">
      <motion.h1
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
        exit={{
          x: -500,
          opacity: 0,
          transition: {
            duration: 0.4,
          },
        }}
        className="text-center text-2xl font-bold dark:text-gray-50"
      >
        Comming Soon
      </motion.h1>
    </div>
  );
};

export default Settings;
