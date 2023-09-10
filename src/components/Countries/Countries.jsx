import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
   

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handelVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)

    }
    return (
        <div >
            <h3>Countries: {countries.length} </h3>
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag,index) =>
                         <img key={index} src = {flag}></img>)
                }
            </div>
           <div className="country-container">
           {
               countries.map(country => 
               <Country key={country.cca3} 
               handleVisitedCountry={handleVisitedCountry}
               handelVisitedFlags ={handelVisitedFlags}
               country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;