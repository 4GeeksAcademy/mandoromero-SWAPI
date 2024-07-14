// Actions.jsx
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_VEHICLES = 'SET_VEHICLES';
export const SET_PLANETS = 'SET_PLANETS';

export const addToFavorites = (entity) => ({
  type: ADD_TO_FAVORITES,
  payload: entity,
});

// Other action creators...
