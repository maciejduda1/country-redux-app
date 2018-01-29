import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';
import {elementsToShow} from './flag-container.component.js';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value))
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }


    render() {
        return (
            <div>
                <select onChange={e => this.chooseContinent(e)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <CountryFlagList countries={elementsToShow(this.props.visibleCountries, this.props.numberOfThisPage, this.props.numberOfCountriesOnEachPage)} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries,
        numberOfThisPage: store.countriesReducer.page,
        numberOfCountriesOnEachPage: store.countriesReducer.numberOfCountriesOnEachPage 
    };
};

export default connect(mapStateToProps)(ContinentsContainer);