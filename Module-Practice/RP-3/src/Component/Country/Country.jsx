import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

  const [visited, setVisited] = useState(false);
  
  const handleVisited = () => {
    // if(visited === true){
    //   setVisited(false);
    // } else { 
    //   setVisited(true);
    // }

    setVisited(!visited);
    handleVisitedCountries(country);
  }

  return (
    <div className={`country fav-country ${visited && 'country-visited'} `}>
      <img className='flags' src={country.flags.png} alt="" />
      <h3>Name: {country.name.common} </h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
      <button 
        className={visited? 'btn-visited' : 'btn-not-visited' } 
        onClick={handleVisited}>{
        visited ? 'Visited' : 'Not Visited' }</button>
      <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>

    </div>
  );
};

export default Country;