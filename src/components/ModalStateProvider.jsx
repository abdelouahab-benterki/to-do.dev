import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalStateProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalStateProvider;
