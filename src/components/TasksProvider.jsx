import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  let taskList = [];

  if (JSON.parse(localStorage.getItem("tasks"))) {
    taskList = JSON.parse(localStorage.getItem("tasks"));
  }

  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
export default TasksProvider;
