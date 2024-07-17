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
    <div className="container" style={{ fontFamily: 'SF Distant Galaxy, sans-serif' }}>
      {entity ? (
        <>
          <h1>{entity.name}</h1>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Details;

