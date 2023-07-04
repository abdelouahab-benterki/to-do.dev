import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTasksContext } from "./TasksProvider";
import { useEditModalContext } from "./EditModalStateProvider";
import { useState } from "react";

const Task = ({ id, d, task }) => {
  const [paragraphStyle, setParagraphStyle] = useState({});
  const check = (e) => {
    if (e.target.checked) {
      setParagraphStyle({ textDecoration: "line-through" });
    } else {
      setParagraphStyle({ textDecoration: "none" });
    }
  };
  const { editState, setEditState } = useEditModalContext();
  const { tasks, setTasks } = useTasksContext();
  const deleteTask = () => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <motion.div
      initial={{ x: -400, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9 + d,
        },
      }}
      exit={{ x: -400, opacity: 0 }}
      className="flex justify-between items-center flex-col sm:flex-row p-4 px-8 text-xl shadow-[2px_2px_10px_0px_rgba(0,29,61,0.25)] rounded-2xl my-4 gap-8 dark:bg-slate-700 dark:shadow-[4px_4px_10px_0px_rgba(248,248,248,0.25)] dark:text-gray-50"
    >
      <p
        className="flex-grow text-justify transition-[text-decoration_0.4s]"
        style={paragraphStyle}
      >
        {task}
      </p>
      <div className="text-2xl flex items-center gap-6 my-4 sm:my-0">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="cursor-pointer"
          onClick={() => {
            setEditState(true);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="cursor-pointer"
          onClick={deleteTask}
        />
        <input
          id="check"
          type="checkbox"
          className="form-checkbox focus:ring-0  w-6 h-6 border-2 border-blue-950 dark:bg-slate-700 dark:border-gray-50 rounded-sm checked:bg-blue-950 checked:hover:bg-blue-900 transition"
          onClick={check}
        />
      </div>
    </motion.div>
  );
};

export default Task;
