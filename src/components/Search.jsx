import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useSearchContext } from "./SearchProvider";
import { useTasksContext } from "./TasksProvider";

const Search = () => {
  //const [term, setTerm] = useState("");

  const { search, setSearch } = useSearchContext();

  // const getResult = () => {
  //   let taskList = tasks.filter((task) => {
  //     if (term !== "") {
  //       if (task.task.toLowerCase().startsWith(term.toLowerCase())) {
  //         return task;
  //       }
  //     } else {
  //       return task;
  //     }
  //   });
  //   setSearch(taskList);
  //   console.log(search);
  // };
  return (
    <motion.div
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
      className="relative flex-grow"
    >
      <input
        type="text"
        placeholder="Search"
        className="border-0 outline-0 focus:outline-none w-full h-12 rounded-md bg-gray-100 shadow-md shadow-gray-300  placeholder-slate-500 outline-none font-bold px-6 focus:shadow-gray-400 transition dark:bg-slate-700 dark:shadow-slate-600 dark:text-gray-50"
        style={{ outline: "none", border: "none" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-3xl absolute top-1/2 right-6 -translate-y-1/2 dark:text-gray-50 cursor-pointer"
      />
    </motion.div>
  );
};

export default Search;
