import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterPages from '../presentational/filter-pages.component';
import { getCountries, searchCountries, deleteCountry, filterCountries, showPage } from '../actions/actions-countries';

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        numberOfThisPage: store.countriesReducer.page,
        numberOfCountriesOnEachPage: store.countriesReducer.numberOfCountriesOnEachPage 
    };
};

export default connect(mapStateToProps)(FilterPages);