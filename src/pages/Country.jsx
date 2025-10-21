import React, { useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import CountryCard from '../components/Layout/CountryCard';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = React.useState([]);


  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  }, []);

  if (isPending) {
    return (
      <h1>Loading....</h1>
    )
  }

  return (
    <div className="min-h-screen">
      <ul className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          countries.map((country) => {
            // use a stable unique key; fall back to ccn3 or name.common if cca3 is missing
            const key = country?.cca3 ?? country?.ccn3 ?? country?.name?.common;
            return <CountryCard key={key} country={country} />
          })
        }
      </ul>
    </div>
  )
}

export default Country;