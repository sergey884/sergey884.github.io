import { createContext, useReducer } from "react";
import { initalState,  appReducer } from './reducers/appReducers';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initalState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};
