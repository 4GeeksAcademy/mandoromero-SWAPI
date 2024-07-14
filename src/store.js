import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_PEOPLE,
  SET_VEHICLES,
  SET_PLANETS
} from './components/Actions';

export function initializeState() {
  const characters = JSON.parse(localStorage.getItem('characters')) || [];
  const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
  const planets = JSON.parse(localStorage.getItem('planets')) || [];
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  return {
    message: null,
    cards: [],
    characters,
    vehicles,
    planets,
    favorites
  };
}

// Initial state is now set by the initializeState function
export const initialState = initializeState();

// Reducer function
export default function storeReducer(state = initialState, action) {
  switch(action.type) {
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

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.uid !== action.payload.uid),
      };

    default:
      throw new Error('Unknown action.');
  }
}