import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { reducer } from './Redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Sentry from '@sentry/browser';

Sentry.init({
    dsn: "https://036e7ba554094a83932bbe2eaae9d226@sentry.io/1462775"
})

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        Sentry.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger, crashReporter),
));




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
