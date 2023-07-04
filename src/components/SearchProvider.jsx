import { createContext, useState, useContext } from "react";
import { useTasksContext } from "./TasksProvider";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
export default SearchProvider;
