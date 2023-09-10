import { useState } from 'react';
import './Country.css'

const Country = ({ country,handelVisitedFlags,handleVisitedCountry }) => {
    const { name, flags, population, region, area } = country
    // console.log(country);


    const [visited, setVisited] = useState(false)

    const handelVisited =()=>{
        setVisited(!visited)

    }
    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited' : 'Non-Visited'}`}>
            <h3 style={{color: visited? 'blue' : 'white'}}>Name: {name?.common} </h3>
            <img className='image' src={flags.png} alt="" />
            <p> population: {population}M</p>
            <p> Region: {region}</p>
            <p> Total area :{area}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button><br />
            <button onClick={()=> handelVisitedFlags(country.flags.png)}>Add Flag</button> <br />
            <button onClick={handelVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? ' I have visited this country' : '  I want to visited this country'}
        </div>
    );
};

export default Country;