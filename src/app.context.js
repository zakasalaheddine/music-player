import { createContext, useReducer, useContext } from "react";
import { appReducer, initialState } from "./app.reducer";

const appContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => useContext(appContext);
