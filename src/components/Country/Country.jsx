import React, { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountries,handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    const { name: { common }, flags: { flags }, population: { population }, area: { area } } = country;
    const handleVisited = () => {
        //   if(visited){
        //     setVisited(false);
        //   }
        //   else{
        //     setVisited(true);
        //   }
        // second system
        // setVisited(visited ? false : true)
        // third system
        setVisited(!visited)
        handleVisitedCountries(country);
    }
    return (


        <div className={`country ${visited && 'country-visited'}`}>
            <h3><span>Country: </span>{common} </h3>
            <img src={flags.png} alt={flags.alt} />
            <p>Population: {population}</p>
            {
                area >= '10000' ? <p>Area: {area}</p> : <p>Area:{area} <br /> The area is too small</p>
            }
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'NotVisited'
                }
            </button>
            <button onClick={()=>{handleVisitedFlag(flags.png) }}>
                Add Visited Flag
            </button>
        </div>

    );
};

export default Country;