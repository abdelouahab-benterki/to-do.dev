import { createContext, useContext, useState } from "react";

const EditModalContext = createContext();

const EditModalStateProvider = ({ children }) => {
  const [editState, setEditState] = useState(false);

  return (
    <EditModalContext.Provider value={{ editState, setEditState }}>
      {children}
    </EditModalContext.Provider>
  );
};

export const useEditModalContext = () => useContext(EditModalContext);
export default EditModalStateProvider;
