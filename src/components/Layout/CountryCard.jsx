import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {

    const key = country?.cca3 ?? country?.ccn3 ?? country?.name?.common;
    return (
        <li className="border p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold">{country.name.common}</h2>
            <p className='text-gray-600'>Population: {country.population}</p>
            <p className='text-gray-600'>Region: {country.region}</p>
            <p className='text-gray-600'>Capital: {country.capital}</p>
            <img className='w-16 h-10 object-cover' src={country.flags.png} alt={`${country.name.common} flag`} />

            <NavLink to={`/country/${key}`}>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Read More
                </button>
            </NavLink>
        </li>
    )
}

export default CountryCard
