import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handelVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)

    }
    return (
        <div >
            <h3>Countries: {countries.length} </h3>
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
               handelVisitedFlags ={handelVisitedFlags}
               country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;