import './style/app.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
//import ReduxThunk from 'redux-thunk'; uncomment to use ReduxThunk

// Components
/**
 * Import components here
 */
import SampleComponent from './components/SampleComponent';

/**
 * uncomment to use ReduxThunk
 */
//const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const createStoreWithMiddleware = compose(applyMiddleware(promise))(createStore);

ReactDOM.render(
    <Provider
        store={ createStoreWithMiddleware(reducers) } >
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={ SampleComponent } />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
);
