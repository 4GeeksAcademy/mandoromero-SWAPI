import React from 'react';
import EntityList from './EntityList';
import useGlobalReducer from '/src/hooks/useGlobalReducer';
import { removeFromFavorites } from './Actions';

const Favorites = () => {
  const { state, dispatch } = useGlobalReducer();
  const { favorites } = state;

  return (
    <div className="container">
      <h1>Favorites</h1>
      <EntityList entities={favorites} entityType="favorites" addToFavorites={(entity) => dispatch(removeFromFavorites(entity))} />
    </div>
  );
};

export default Favorites;