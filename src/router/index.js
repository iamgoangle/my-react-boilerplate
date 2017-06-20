import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// layout container
import App from '../containers/App';

// containers
import FxCalculator from '../containers/FxCalculator';

export default (
    <Router>
        <div>
            <div>
                <h4>Header</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fx">Forex Calculator</Link></li>
                </ul>
                <hr />
            </div>
            
            <div>
                <Route exact path='/' component={App} />
                <Route path='/fx' component={FxCalculator} />
            </div> 

            <div>
                <hr />
                <h4>Footer</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fx">Forex Calculator</Link></li>
                </ul>
            </div>
        </div>    
    </Router>
);
