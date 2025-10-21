import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
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
        return <h1>Loading...</h1>
    }

    if (error) {
        return (
            <div className="min-h-screen p-8">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    if (!country) {
        // No data yet (and not pending) — render nothing or a small placeholder
        return <div className="min-h-screen p-8">No country selected.</div>
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

    return (
        <div className="min-h-screen p-8">
            <div className="border p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">{name}</h2>
                <p className='text-gray-700 mb-2'>Population: {population}</p>
                <p className='text-gray-700 mb-2'>Region: {region}</p>
                <p className='text-gray-700 mb-2'>Subregion: {subregion}</p>
                <p className='text-gray-700 mb-2'>Capital: {capital}</p>
                <p className='text-gray-700 mb-2'>Languages: {languages}</p>
                <p className='text-gray-700 mb-2'>Currencies: {currencies}</p>
                <p className='text-gray-700 mb-2'>Borders: {borders}</p>
                {flagSrc ? (
                    <img className='w-32 h-20 object-cover mt-4' src={flagSrc} alt={`${name} flag`} />
                ) : null}
            </div>
        </div>
    )
}

export default CountryDetails;
