import React from 'react';

export default function Country (props) {

    const {name, flags, region} = props.country;

  return (
    <div className=' text-center bg-red-100 p-6 m-4 rounded-lg drop-shadow-lg '> 
        <h3 className='text-xl font-bold'>{name.common}</h3>
        <p className='text-md font-bold'> {region}</p>
        <img src={flags.png} alt={flags.alt} />
    </div>
  )
}