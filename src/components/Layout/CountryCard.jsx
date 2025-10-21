import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {
    const key = country?.cca3 ?? country?.ccn3 ?? country?.name?.common;
    
    // Format population with commas
    const formatPopulation = (pop) => {
        return new Intl.NumberFormat('en-US').format(pop);
    };

    return (
        <li className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50 overflow-hidden">
            {/* Flag Image */}
            <div className="relative h-32 overflow-hidden">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={country.flags.png} 
                    alt={`${country.name.common} flag`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {country.name.common}
                </h2>
                
                <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Population</span>
                        <span className="text-white font-medium text-sm">{formatPopulation(country.population)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Region</span>
                        <span className="text-white font-medium text-sm">{country.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Capital</span>
                        <span className="text-white font-medium text-sm">{Array.isArray(country.capital) ? country.capital[0] : country.capital}</span>
                    </div>
                </div>

                <NavLink to={`/country/${key}`}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
                        Explore Details
                    </button>
                </NavLink>
            </div>
        </li>
    )
}

export default CountryCard
