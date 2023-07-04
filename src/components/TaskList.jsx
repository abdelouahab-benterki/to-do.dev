import Task from "./Task";
import { useTasksContext } from "./TasksProvider";
import { motion, AnimatePresence } from "framer-motion";
import EditModalStateProvider from "./EditModalStateProvider";
import EditTask from "./EditTask";
import EditModal from "./EditModal";
import { useSearchContext } from "./SearchProvider";
import { useEffect, useState } from "react";
const TaskList = () => {
  const { search } = useSearchContext();
  const { tasks } = useTasksContext();
  const [result, setResult] = useState(tasks);

  useEffect(() => {
    setResult(
      tasks.filter((task) => {
        if (search !== "") {
          if (task.task.toLowerCase().includes(search.toLowerCase())) {
            return task;
          }
        } else {
          return task;
        }
      })
    );
  }, [search, tasks]);
  const taskList = result.map(({ id, task }, index) => (
    <div key={id}>
      <EditModalStateProvider>
        <Task d={index * 0.1} key={id} id={id} task={task} />
        <EditModal>
          <EditTask id={id} txt={task} />
        </EditModal>
      </EditModalStateProvider>
    </div>
  ));

  return (
    <motion.section
      className="my-12"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -500, opacity: 0 }}
    >
      <AnimatePresence>{taskList}</AnimatePresence>
    </motion.section>
  );
};

export default TaskList;
