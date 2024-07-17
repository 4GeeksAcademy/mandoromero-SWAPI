// Home.jsx
import React, { useEffect } from 'react';
import EntityList from "../components/EntityList.jsx";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { fetchPeople, fetchVehicles, fetchPlanets } from '../components/Actions.jsx';

const Home = () => {
  const { state, dispatch } = useGlobalReducer();
  
  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchVehicles());
    dispatch(fetchPlanets());
  }, [dispatch]);

  return (
    <div className="container mt-5" style={{ fontFamily: 'SF Distant Galaxy, sans-serif', textAlign: "center" }}>
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


// // Home.jsx
// import React, { useEffect } from 'react';
// import EntityList from "../components/EntityList.jsx";
// import { useGlobalReducer } from "../hooks/useGlobalReducer";
// import { fetchPeople, fetchVehicles, fetchPlanets } from '../components/Actions.jsx';

// const Home = () => {
//   const { state, dispatch } = useGlobalReducer();
  
//   useEffect(() => {
//     dispatch(fetchPeople());
//     // dispatch(fetchVehicles());
//     // dispatch(fetchPlanets());
//   }, [dispatch]);

//   return (
//     <div className="container mt-5" style={{ fontFamily: 'StarJedi Special Edition, sans-serif' }}>
//       <h1>Star Wars Entities</h1>
//       <h2>Characters</h2>
//       <EntityList entities={state.characters} entityType="characters" />
//       <h2>Vehicles</h2>
//       <EntityList entities={state.vehicles} entityType="vehicles" />
//       <h2>Planets</h2>
//       <EntityList entities={state.planets} entityType="planets" />
//     </div>
//   );
// };

// export default Home;



// // import React, { useEffect } from 'react';
// // import EntityList from "../components/EntityList.jsx";
// // import { useGlobalReducer } from "../hooks/useGlobalReducer";
// // import { fetchPeople, fetchVehicles, fetchPlanets } from '../components/Actions.jsx';

// // const Home = () => {
// //   const { state, dispatch } = useGlobalReducer();
  
// //   useEffect(() => {
// //     dispatch(fetchPeople());
// //     dispatch(fetchVehicles());
// //     dispatch(fetchPlanets());
// //   }, [dispatch]);

// //   return (
// //     <div className="container mt-5" style={{ fontFamily: 'StarJedi Special Edition, sans-serif' }}>
// //       <h1>Star Wars Entities</h1>
// //       <h2>Characters</h2>
// //       <EntityList entities={state.characters} entityType="characters" />
// //       <h2>Vehicles</h2>
// //       <EntityList entities={state.vehicles} entityType="vehicles" />
// //       <h2>Planets</h2>
// //       <EntityList entities={state.planets} entityType="planets" />
// //     </div>
// //   );
// // };

// // export default Home;




// // import React, { useEffect } from 'react';
// // import EntityList from "../components/EntityList.jsx";
// // import { useGlobalReducer } from '../hooks/useGlobalReducer';
// // import {fetchPeople, fetchVehicles, fetchPlanets } from '../components/Actions.jsx';

// // const Home = () => {

// // 	const { state, dispatch } = useGlobalReducer();
	
// // 	useEffect(() => {
// // 		dispatch(fetchPeople());
// // 		dispatch(fetchVehicles());
// // 		dispatch(fetchPlanets());
// // 	}, [dispatch]);

// // 	return (
// // 		<div className="contianer mt-5" style={{ fontFamily: 'StarJedi Special Edition, sans-serif' }}>
// // 			<h1>Star Wars Entities</h1>
// // 			<h2>Characters</h2>
// // 				<EntityList entities={state.characters} entityType="characters" />
// // 			<h2>Vehicles</h2>
// // 				<EntityList entities={state.vehicles} entityType="vehicles" />
// // 			<h2>Planets</h2>
// // 				<EntityList entities={state.planets} entityType="planets" />
// // 		</div>
// // 	);
// // }; 

// // export default Home;