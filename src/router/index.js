import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// layout container
import App from '../containers/App';

// containers
// import Home from './containers/pages/Home';

export default (
    <Router>
        <div>
            <Route path='/' component={App}>
            </Route>
        </div> 
    </Router>
);
