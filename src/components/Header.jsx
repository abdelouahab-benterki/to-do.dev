import { motion } from "framer-motion";
import { useModeStateContext } from "./ModeStateProvider";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import darkLogo from "../assets/logo-dark.svg";
import UserIcon from "./UserIcon";

const Header = () => {
  const { mode, setMode } = useModeStateContext();

  return (
    <header className="py-4 bg-gray-50 dark:bg-slate-800">
      <div className="container flex justify-between items-center relative">
        <Link to="/">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="logo"
          >
            <img
              src={mode === "light" ? logo : darkLogo}
              alt="to do app logo"
            />
          </motion.div>
        </Link>
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
