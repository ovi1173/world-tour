import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    const handleVisitedCountries = (country) => {
        // console.log('Handle visited countries clicked',country);
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
    }
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    console.log(countries);
    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Total Visited Country:{visitedCountries.length} </h1>
            <ol style={{ textAlign: 'center' }}>
                {
                    visitedCountries.map(country =>
                        <li key={country.cca3.cca3}>{country.name.common}</li>
                    )
                }
            </ol>
            <div>
                {
                    visitedFlag.map((flag, index) => (
                        <img style={{width:'150px', marginLeft:'10px'}} key={index} src={flag} alt={`flag-${index}`} />
                    ))
                }
            </div>
            <div id='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} handleVisitedFlag={handleVisitedFlag} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </>

    );
};

export default Countries;