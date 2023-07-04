import avatar from "../assets/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useModeStateContext } from "./ModeStateProvider";

const UserIcon = () => {
  const { mode, setMode } = useModeStateContext();
  const [listState, setListState] = useState("hidden");
  const [listStyle, setListStyle] = useState({
    opacity: 0,
    pointerEvents: "none",
  });

  useEffect(() => {
    if (listState === "hidden") {
      setListStyle({ opacity: 0, pointerEvents: "none" });
    } else {
      setListStyle({ opacity: 1, pointerEvents: "auto" });
    }
  }, [listState]);

  const handleListState = () => {
    if (listState === "hidden") {
      setListState("");
    } else {
      setListState("hidden");
    }
  };

  const body = document.body;

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      body.classList.add("dark");
    } else {
      setMode("light");
      body.classList.remove("dark");
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className="flex justify-center items-center gap-4 dark:text-gray-50"
    >
      <div className="hidden sm:block">
        <p className="capitalize text-sm font-medium">username</p>
        <p className="text-xs">user@mail.com</p>
      </div>
      <div
        className="w-12 rounded-full overflow-hidden cursor-pointer"
        onClick={handleListState}
      >
        <img src={avatar} alt="avatar" className="object-cover" />
      </div>
      <motion.div
        className={`bg-white dark:bg-slate-800 dark:shadow-slate-700 dark:shadow-md shadow-2xl text-lg w-64 capitalize rounded-xl absolute right-0 overflow-hidden top-[88px] z-20`}
        style={listStyle}
        animate={listStyle}
      >
        <nav>
          <div>
            <Link to="/settings">
              <div
                className="border-b p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                onClick={handleListState}
              >
                <FontAwesomeIcon icon={faGear} />
                <span className="ml-4">settings</span>
              </div>
            </Link>

            <div
              className="border-b p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              onClick={toggleMode}
            >
              <FontAwesomeIcon
                icon={mode === "light" ? faToggleOff : faToggleOn}
              />
              <span className="ml-4">{mode} mode</span>
            </div>
            <div className="p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition point">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="ml-4">logout</span>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default UserIcon;
