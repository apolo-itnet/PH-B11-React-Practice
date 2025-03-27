import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

  const [visited, setVisited] = useState(false);
  
  const handleVisited = () => {
    setVisited(true)
  }

  return (
    <div className={`country ${visited && 'country-visited'} `}>
      <img className='flags' src={country.flags.png} alt="" />
      <h3>Name: {country.name.common} </h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
      <button onClick={handleVisited}>{
        visited ? 'visited' : 'Not Visited' }</button>

    </div>
  );
};

export default Country;