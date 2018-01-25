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

    showPage(number){
        this.props.dispatch(showPage(number));
       //console.log(Math.ceil(this.props.visibleCountries.length/this.props.numberOfCountriesOnEachPage));
        return  elementsToShow(this.props.visibleCountries, this.props.numberOfThisPage, this.props.numberOfCountriesOnEachPage);
       // console.log('this.props.visibleCountries' + this.props.visibleCountries);
         
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <div className="filter.Result" >
                    <h5>Ilość wyników na stronie</h5>
                    <button onClick={() => this.filterResults(5) }>5</button>
                    <button onClick={() => this.filterResults(10) }>10</button>
                    <button onClick={() => this.filterResults(15) }>15</button>
                    <button onClick={() => this.filterResults(20) }>20</button>
                </div>
                <Pages pages={Math.ceil(this.props.visibleCountries.length/this.props.numberOfCountriesOnEachPage)} clickEvent={(item)=>this.showPage(item)} />
                <CountryFlagList countries={this.showPage(this.props.numberOfThisPage)} deleteCountry={this.deleteCountry.bind(this)} countriesPerPage={this.props.numberOfCountriesOnEachPage} />
            </div>
        )
    }
}

//
/*
 <h5>strony: <b>{this.props.numberOfThisPage}</b></h5>
                <button onClick={() => this.showPage(2) }> str. 2</button>
*/

const Pages = (props) => {
    let items = []
    for (let i = 1; i <= props.pages; i++){
        items = [...items, i]
    }
    console.log('items ' + items);
    return (
        <div>
            {items.map( item => <button key={item} onClick={() => props.clickEvent(item)}>{item}</button> )}
        </div>
    );
};



function elementsToShow(visibleCountries, pageNumber, filterNumber){ 
    //console.log('visibleCountries ' + visibleCountries);
   let items = visibleCountries.filter((countrie) => {
        if (visibleCountries.indexOf(countrie) <= pageNumber * filterNumber -1 && visibleCountries.indexOf(countrie) >= (pageNumber -1) * filterNumber ){
            return countrie
        }     
   })
   console.log('items ' + items);
   return items;
}

/*
items =
   visibleCountries.filter(countrie => {
      // console.log(countrie);
        for (let i = 0; i < visibleCountries.length; i++ ){
            if ( visibleCountries.indexOf(countrie) <= pageNumber * filterNumber && countrie.name == visibleCountries[i].name ){
                 console.log('countrie: ' + countrie);
                return countrie;
            } 
        }
   })




*/
/*
    let items = []
    for (let i = 0; i < visibleCountries.length; i++ ){
    // console.log(visibleCountries[i]);
   // console.log(pageNumber);
   // console.log(filterNumber);
        if ( i <= pageNumber * filterNumber) {
            items = [...items, visibleCountries[i]];
        }
    }
    console.log('items ' + items[0].name);
    return items;
}
*/
//for (let i = 1; i =< Math.ceil(props.countriesNumber/props.visible; i++){


const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        numberOfThisPage: store.countriesReducer.page,
        numberOfCountriesOnEachPage: store.countriesReducer.numberOfCountriesOnEachPage 
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);