import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry, filterCountries, showPage } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

   deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    filterResults(number) {
        this.props.dispatch(filterCountries(number));
    }

    showCountries(number){
        return  elementsToShow(this.props.visibleCountries, this.props.numberOfThisPage, this.props.numberOfCountriesOnEachPage);  
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={this.showCountries(this.props.numberOfThisPage)} deleteCountry={this.deleteCountry.bind(this)} countriesPerPage={this.props.numberOfCountriesOnEachPage} />
            </div>
        )
    }
}

function elementsToShow(visibleCountries, pageNumber, filterNumber){ 
    //console.log('visibleCountries ' + visibleCountries);
    let items = visibleCountries.slice( (pageNumber -1) * filterNumber, pageNumber * filterNumber);
/*
    let items = visibleCountries.filter((countrie) => {
        if (visibleCountries.indexOf(countrie) <= pageNumber * filterNumber -1 && visibleCountries.indexOf(countrie) >= (pageNumber -1) * filterNumber ){
            return countrie
        }     
   })
  // console.log('items ' + items);
*/
   return items;
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        numberOfThisPage: store.countriesReducer.page,
        numberOfCountriesOnEachPage: store.countriesReducer.numberOfCountriesOnEachPage 
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);
export {elementsToShow};