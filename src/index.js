import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/reducer'
import logger from 'redux-logger';
import App from './containers/App'
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger()),
));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
