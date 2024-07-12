import EntityList from "../components/EntityList.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="contianer mt-5">
			<h1>Star Wars Entities</h1>
			<h2>Characters</h2>
				<EntityList />
			<h2>Vehicles</h2>
				<EntityList />
			<h2>Planets</h2>
				<EntityList />
		</div>
	);
}; 

export default Home;