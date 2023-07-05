import { useState } from "react";
import { useTasksContext } from "./TasksProvider";
import { useModalContext } from "./ModalStateProvider";

const AddTask = () => {
  const { state, setState } = useModalContext();
  const [areaStyle, setAreaStyle] = useState({});
  const [areaMessage, setAreaMessage] = useState({
    message: "",
    style: {
      opacity: 0,
    },
  });
  const toggleModal = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  const [taskText, setTaskText] = useState("");
  const { tasks, setTasks } = useTasksContext();

  const onChangeArea = (e) => {
    if (e.target.value) {
      setAreaMessage({
        message: "",
        style: {
          opacity: 0,
        },
      });
      setAreaStyle({ borderColor: "transparent" });
    } else {
      setAreaMessage({
        message: "Task content can't be empty",
        style: {
          opacity: 1,
        },
      });
      setAreaStyle({ borderColor: "#dd3249" });
    }
  };

  const addFunction = (text) => {
    if (text) {
      const newTask = { id: Date.now(), task: text };
      setTasks([...tasks, newTask]);
      toggleModal();
    }
  };
  return (
    <>
      <h2 className="text-xl font-medium dark:text-gray-50">New Task</h2>
      <form>
        <textarea
          name="task"
          id="task"
          className="w-full h-36 shadow-lg border outline-none p-4 rounded-md resize-none mt-4 bg-gray-100 dark:bg-slate-700 dark:border-0 dark:text-gray-50 dark:shadow-slate-600 font-semibold transition-all duration-[0.4s]"
          placeholder="What You Wanna Do ??"
          style={areaStyle}
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            onChangeArea(e);
          }}
        ></textarea>
        <p
          className="text-red-600 h-1 transition-all duration-[0.4s]"
          style={areaMessage.style}
        >
          {areaMessage.message}
        </p>
        <div className="text-right mt-2">
          <button
            type="submit"
            className="bg-yellow-400 capitalize text-xl px-8 h-12 rounded-md font-medium border-2 border-transparent hover:border-yellow-400 hover:bg-gray-50 hover:text-yellow-500 transition w-fit shadow-md dark:hover:bg-slate-800 dark:shadow-slate-600"
            onClick={(e) => {
              e.preventDefault();
              addFunction(taskText);
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
