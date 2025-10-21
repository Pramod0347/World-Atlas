import React from 'react';
import countryData from '../api/countryData.json';

const About = () => {
    return (
        <section className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h1 className='text-5xl font-bold text-white mb-6'>
                        Discover Amazing Facts About Our World
                    </h1>
                    <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                        Explore fascinating insights about countries around the globe. Each nation has its own unique story, culture, and interesting characteristics that make our world diverse and wonderful.
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {countryData.map((country) => (
                        <div 
                            key={country.id} 
                            className='group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50 overflow-hidden'
                        >
                            <div className='p-6'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                        <span className='text-white font-bold text-lg'>
                                            {country.countryName.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                                        {country.countryName}
                                    </h3>
                                </div>
                                
                                <div className='space-y-3 mb-6'>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-gray-400 text-sm'>Capital</span>
                                        <span className='text-white font-medium text-sm'>{country.capital}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-gray-400 text-sm'>Population</span>
                                        <span className='text-white font-medium text-sm'>{country.population}</span>
                                    </div>
                                </div>
                                
                                <div className='bg-gray-700/50 rounded-xl p-4 border border-gray-600'>
                                    <h4 className='text-sm font-semibold text-blue-400 mb-2'>Interesting Fact</h4>
                                    <p className='text-gray-300 text-sm leading-relaxed'>
                                        {country.interestingFact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='text-center mt-16'>
                    <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto'>
                        <h2 className='text-3xl font-bold text-white mb-4'>
                            Ready to Explore More?
                        </h2>
                        <p className='text-blue-100 mb-6'>
                            Discover detailed information about countries, their cultures, and fascinating facts from around the world.
                        </p>
                        <a 
                            href='/country' 
                            className='inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors'
                        >
                            Browse All Countries
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;