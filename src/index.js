import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './state/rootReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
