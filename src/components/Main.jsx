import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import Actions from "./Actions";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Modal from "./Modal";
import ModalStateProvider from "./ModalStateProvider";
import TasksProvider from "./TasksProvider";
import SearchProvider from "./SearchProvider";

const Main = () => {
  return (
    <ModalStateProvider>
      <TasksProvider>
        <motion.main>
          <div className="container">
            <motion.h1
              initial={{ x: -400, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.5,
                },
              }}
              exit={{ x: -400, opacity: 0 }}
              className="capitalize text-2xl font-bold mt-10 dark:text-gray-50"
            >
              <FontAwesomeIcon icon={faListCheck} />
              <span className="ml-2">tasks</span>
            </motion.h1>
            <SearchProvider>
              <Actions />
              <TaskList />
            </SearchProvider>
          </div>
          <Modal>
            <AddTask />
          </Modal>
        </motion.main>
      </TasksProvider>
    </ModalStateProvider>
  );
};

export default Main;
