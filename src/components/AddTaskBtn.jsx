import { useModalContext } from "./ModalStateProvider";
import { motion } from "framer-motion";

const AddTaskBtn = () => {
  const { state, setState } = useModalContext();
  const toggleModal = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.5,
        },
      }}
      exit={{ x: 400, opacity: 0 }}
    >
      <button
        className="bg-yellow-400 capitalize text-xl px-8 h-12 rounded-md font-medium border-2 border-transparent hover:border-yellow-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-yellow-500 transition w-fit shadow-md dark:shadow-slate-600"
        onClick={toggleModal}
      >
        add new task
      </button>
    </motion.div>
  );
};

export default AddTaskBtn;
