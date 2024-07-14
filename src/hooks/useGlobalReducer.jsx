import { useContext, useReducer, createContext } from "react";
import storeReducer, { initializeState } from "../store";

// Create a context to hold the global state of the application
const StoreContext = createContext();

// Define a provider component that encapsulates the store and wraps it in a context provider
export function StoreProvider({ children }) {
  // Initialize reducer with the initial state
  const [state, dispatch] = useReducer(storeReducer, initializeState());
  // Provide the store and dispatch method to all child components
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// Custom hook to access the global state and dispatch function
export default function useGlobalReducer() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useGlobalReducer must be used within a StoreProvider');
  }
  return context;
}