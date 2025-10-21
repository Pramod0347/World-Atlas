import axios from 'axios';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

const getCountryData = () => {
    return api.get('/all?fields=name,population,region,capital,flags');
};

const getIndividualCountryData = (countryName) => {
    return api.get(`/name/${countryName}?fullText=true&fields=name,population,region,capital,flags,subregion,languages,currencies,borders`);
}

export { getCountryData, getIndividualCountryData };