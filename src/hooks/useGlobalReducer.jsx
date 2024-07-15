import React, { createContext, useContext, useReducer } from 'react';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_PEOPLE,
  SET_VEHICLES,
  SET_PLANETS
} from '../components/Actions';

const initialState = {
  characters: [],
  vehicles: [],
  planets: [],
  favorites: []
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.uid !== action.payload.uid
        ),
      };
    case SET_PEOPLE:
      return {
        ...state,
        characters: action.payload,
      };
    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };
    case SET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Create context and provider
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the global state and dispatch function
export const useGlobalReducer = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useGlobalReducer must be used within a StoreProvider');
  }
  return context;
};

