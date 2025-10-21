import React from 'react';
import countryData from '../api/countryData.json';

const About = () => {
    return (
        <section className='container mx-auto p-4'>
            <h1 className='text-4xl font-bold m-4 text-center'>Here are the Interesting Facts <br /> we're proud of</h1>
            <div className='flex flex-wrap gap-6'>
                <div className='flex p-4 items-center gap-6 flex-wrap'>
                    {countryData.map((country) => (
                        <div key={country.id} className='mb-4 border border-grey-800 rounded-lg shadow p-4 w-[32%] h-110 rounded flex flex-col items-start gap-2'>
                            <p className='font-semibold'> {country.countryName}</p>
                            <p className='text-gray-600'>Capital: <span className='font-semibold'>{country.capital}</span></p>
                            <p className='text-gray-600'>Population: <span className='font-semibold'>{country.population}</span></p>
                            <p className='text-gray-600'>Interesting Fact: <span className='font-semibold'>{country.interestingFact}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;