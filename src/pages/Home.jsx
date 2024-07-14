import React from 'react';
import EntityList from "../components/EntityList.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {

  const { state } =useGlobalReducer();

	return (
		<div className="contianer mt-5" style={{ fontFamily: 'StarJedi Special Edition, sans-serif' }}>
			<h1>Star Wars Entities</h1>
			<h2>Characters</h2>
				<EntityList entities={state.characters} entityType="characters" />
			<h2>Vehicles</h2>
				<EntityList entities={state.vehicles} entityType="vehicles" />
			<h2>Planets</h2>
				<EntityList entities={state.planets} entityType="planets" />
		</div>
	);
}; 

export default Home;