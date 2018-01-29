import React, {Component}  from 'react';
import { getCountries, searchCountries, deleteCountry, filterCountries, showPage } from '../actions/actions-countries';

class FilterPages extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        if (this.props.visibleCountries.length <= (this.props.numberOfThisPage - 1) * this.props.numberOfCountriesOnEachPage) {
            this.showPage(this.props.numberOfThisPage - 1);
        }
    }
    filterResults(number) {
        this.props.dispatch(filterCountries(number));
    }

    showPage(number) {
        this.props.dispatch(showPage(number));
        //return  elementsToShow(this.props.visibleCountries, this.props.numberOfThisPage, this.props.numberOfCountriesOnEachPage);
    }

    numberOfPages() {
        const numberOfPages = Math.ceil(this.props.visibleCountries.length/this.props.numberOfCountriesOnEachPage);
        //console.log('this.props.visibleCountries.length ' + this.props.visibleCountries.length);
        return numberOfPages;
        
    }

    render() {
        return (
            <div className="filter-pages">
                <div className="filter.Result" >
                    <h5>Ilość wyników na stronie</h5>
                    <button onClick={() => this.filterResults(5) }>5</button>
                    <button onClick={() => this.filterResults(10) }>10</button>
                    <button onClick={() => this.filterResults(15) }>15</button>
                    <button onClick={() => this.filterResults(20) }>20</button>
                </div>
                <Pages pages={this.numberOfPages()} clickEvent={(item)=>this.showPage(item)} />
                <div>
                    {this.props.children}
                </div>
            </div>
            
        );
    }
} 

const Pages = (props) => {
    let items = [];
    for (let i = 1; i <= props.pages; i++){
        items = [...items, i];
    }
    console.log('items ' + items);
    return (
        <div>
            <p>Strony Wyników : </p> 
            {items.map( item => <button key={item} onClick={() => props.clickEvent(item)}>{item}</button> )}
        </div>
    );
};
/*
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
*/

export default FilterPages;