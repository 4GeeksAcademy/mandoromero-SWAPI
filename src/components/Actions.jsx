import { useContext, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { Provider } from 'react-redux';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <StoreContext.Provider value={{ store }}>
        {children}
      </StoreContext.Provider>
    </Provider>
  );
}

export default function useGlobalReducer() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useGlobalReducer must be used within a StoreProvider');
  }
  return {
    store: useSelector(state => state),
    dispatch: useDispatch()
  };
}

