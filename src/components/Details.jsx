import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
let { id, type } = useParams();
  const [entity, setEntity] = useState({});

  // here is an if statement to catch "chatacters" and make people instead
  if (type == "characters") type = "people";
  useEffect(() => {
    const fetchEntity = async () => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
        let data = await response.json();
        setEntity(data.result.properties);
      } catch (error) {
        console.error('Failed to fetch entity details', error);
      }
    };
    fetchEntity();
  }, [id, type]);

  return (
    <div className="container" style={{ fontFamily: 'SF Distant Galaxy, sans-serif', color: "#ffe81f" }}>
      {entity ? (
        <>
          <h1 style={{ fontFamily: 'SF Distant Galaxy, sans-serif', color: "#ffe81f" }}>{entity.name}</h1>
          {type === 'people' && (
            <>
              <p>Height:  {entity.height}</p>
              <p>Weight:  {entity.mass}</p>
              <p>Hair-Color:  {entity.hair_color}</p>
              <p>Eye-Color:  {entity.eye_color}</p>
              <p>Birth Year:  {entity.birth_year}</p>
              <p>Gender:   {entity.gender}</p>
            </>
          )}
          {type === 'vehicles' && (
            <>
              <p>Manufacturer:  {entity.manufacturer}</p>
              <p>Model:  {entity.model}</p>
              <p>Vehicle Class:  {entity.vehicle_class}</p>
              <p>Cargo Capacity:  {entity.cargo_capacity}</p>
              <p>Consumables:  {entity.consumables}</p>
              <p>Cost In Credits:  {entity.cost_in_credits}</p>
              <p>Crew:  {entity.crew}</p>
              <p>Passengers:  {entity.passengers}</p>
            </>
          )}
          {type === 'planets' && (
            <>
            <p>Terrain:  {entity.terrain}</p>
            <p>Climate:  {entity.climate}</p>
            <p>Population:  {entity.population}</p>
            <p>Diameter:  {entity.diameter}</p>
            <p>Rotation Period:  {entity.rotation_period}</p>
            <p>Orbital Period:  {entity.orbital_period}</p>
          </>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Details;