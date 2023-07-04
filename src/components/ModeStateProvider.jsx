import { useContext, useState, createContext, useEffect } from "react";

const ModeContext = createContext();

const ModeStateProvider = ({ children }) => {
  let savedMode = "light";
  if (!localStorage.getItem("mode")) {
    localStorage.setItem("mode", savedMode);
  } else {
    savedMode = localStorage.getItem("mode");
  }
  const [mode, setMode] = useState(savedMode);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "dark") {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeStateProvider;
export const useModeStateContext = () => useContext(ModeContext);
