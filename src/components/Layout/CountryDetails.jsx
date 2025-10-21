import React, { useEffect, useState, useTransition } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getIndividualCountryData } from '../../api/postApi';

const CountryDetails = () => {
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (!params?.id) return;

        startTransition(() => {
            (async () => {
                try {
                    const res = await getIndividualCountryData(params.id);
                    if (res && res.status === 200) {
                        console.log(res.data[0]);
                        setCountry(res.data[0]);
                        setError(null);
                    } else {
                        setError('Country not found');
                    }
                } catch (err) {
                    setError(err?.message || 'Failed to fetch country data');
                }
            })();
        });
    }, [params?.id, startTransition]);

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <p className="text-gray-400">Loading country details...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
                    <p className="text-red-400 mb-6">{error}</p>
                    <Link to="/country" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                        Back to Countries
                    </Link>
                </div>
            </div>
        );
    }

    if (!country) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                    <p className="text-gray-400">No country selected.</p>
                    <Link to="/country" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-4 inline-block">
                        Browse Countries
                    </Link>
                </div>
            </div>
        )
    }

    const name = country?.name?.common || 'N/A';
    const population = country?.population ?? 'N/A';
    const region = country?.region || 'N/A';
    const subregion = country?.subregion || 'N/A';
    const capital = Array.isArray(country.capital) ? country.capital.join(', ') : (country.capital || 'N/A');
    const languages = country?.languages ? Object.values(country.languages).join(', ') : 'N/A';
    const currencies = country?.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';
    const borders = country?.borders && country.borders.length ? country.borders.join(', ') : 'None';
    const flagSrc = country?.flags?.png || country?.flags?.svg || '';

    // Format population with commas
    const formatPopulation = (pop) => {
        return new Intl.NumberFormat('en-US').format(pop);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
            <div className="container mx-auto max-w-6xl">
                {/* Back Button */}
                <Link 
                    to="/country" 
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Countries
                </Link>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                    {/* Header Section */}
                    <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
                        {flagSrc && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img 
                                    className="h-32 w-auto object-contain drop-shadow-2xl" 
                                    src={flagSrc} 
                                    alt={`${name} flag`}
                                />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
                        <p className="text-gray-400 text-lg mb-8">{region} • {subregion}</p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Population</h3>
                                </div>
                                <p className="text-xl font-bold text-blue-400">{formatPopulation(population)}</p>
                            </div>

                            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-white">Capital</h3>
                                </div>
                                <p className="text-lg font-bold text-green-400">{capital}</p>
                            </div>

                            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-white">Region</h3>
                                </div>
                                <p className="text-lg font-bold text-purple-400">{region}</p>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                                <h3 className="text-base font-semibold text-white mb-4">Languages</h3>
                                <p className="text-gray-300 text-sm">{languages}</p>
                            </div>
                            <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                                <h3 className="text-base font-semibold text-white mb-4">Currencies</h3>
                                <p className="text-gray-300 text-sm">{currencies}</p>
                            </div>
                        </div>

                        {borders !== 'None' && (
                            <div className="mt-6 bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                                <h3 className="text-base font-semibold text-white mb-4">Bordering Countries</h3>
                                <p className="text-gray-300 text-sm">{borders}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;
