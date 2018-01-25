export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const SHOW_PAGE = 'SHOW_PAGE'

export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}

export function filterCountries(numberOfCountriesOnEachPage) {
    return {
        type: FILTER_COUNTRIES,
        numberOfCountriesOnEachPage
    }
}

export function showPage(page) {
    return {
        type: SHOW_PAGE,
        page
    }
}