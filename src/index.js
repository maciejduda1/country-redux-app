import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root')
);
store.dispatch(getCountries());