import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, flags, population, region, area } = country
    console.log(country);


    const [visited, setVisited] = useState(false)

    const handelVisited =()=>{
        setVisited(!visited)

    }

    return (
        <div className={`country ${visited ? 'visited' : 'Non-Visited'}`}>
            <h3 style={{color: visited? 'blue' : 'white'}}>Name: {name?.common} </h3>
            <img className='image' src={flags.png} alt="" />
            <p> population: {population}M</p>
            <p> Region: {region}</p>
            <p> Total area :{area}</p>
            <button onClick={handelVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? '  I have visited this country' : '  I want to visited this country'}
        </div>
    );
};

export default Country;