import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, FILTER_COUNTRIES, SHOW_PAGE } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: [],
    numberOfCountriesOnEachPage: 10,
    page: 1
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries, page: 1});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id != action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
            const rightPage = notDeletedCountries.length - (state.page-1) * state.numberOfCountriesOnEachPage;
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries, page: 1});   

        case FILTER_COUNTRIES:
         //   const countriesToShow = (state.page - 1) * action.numberOfCountriesOnEachPage + 1 -
            return Object.assign({}, state, {numberOfCountriesOnEachPage: action.numberOfCountriesOnEachPage, page: 1});

        case SHOW_PAGE:
            return Object.assign({}, state, {page: action.page});

        default:
            return state;
    }
};

export default countriesReducer;