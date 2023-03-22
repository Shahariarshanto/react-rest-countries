import { useEffect, useState } from 'react';
import Country from './Country';


function Countries() {
  const [country, setCountry] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(data => setCountry(data))
  },[])

  return (
    <div className='flex flex-wrap container mx-auto mt-12 '>
        {
            country.map((country, index) => <Country country={country} key={index}/> )
        }
      
    </div>
  )
}

export default Countries
