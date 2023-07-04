import { useState } from "react";
import { useTasksContext } from "./TasksProvider";
import { useModalContext } from "./ModalStateProvider";

const AddTask = () => {
  const { state, setState } = useModalContext();
  const toggleModal = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  const [taskText, setTaskText] = useState("");
  const { tasks, setTasks } = useTasksContext();
  const addFunction = (text) => {
    const newTask = { id: Date.now(), task: text };
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <h2 className="text-xl font-medium dark:text-gray-50">New Task</h2>
      <form>
        <textarea
          name="task"
          id="task"
          className="w-full h-36 shadow-lg border outline-none p-4 rounded-md resize-none mt-4 bg-gray-100 dark:bg-slate-700 dark:border-0 dark:text-gray-50 dark:shadow-slate-600 font-semibold"
          placeholder="What You Wanna Do ??"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        ></textarea>
        <div className="text-right mt-2">
          <button
            type="submit"
            className="bg-yellow-400 capitalize text-xl px-8 h-12 rounded-md font-medium border-2 border-transparent hover:border-yellow-400 hover:bg-gray-50 hover:text-yellow-500 transition w-fit shadow-md dark:hover:bg-slate-800 dark:shadow-slate-600"
            onClick={(e) => {
              e.preventDefault();
              addFunction(taskText);
              toggleModal();
            }}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
