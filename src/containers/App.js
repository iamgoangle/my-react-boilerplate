// react import
import React, { Component, PropTypes } from 'react';

// redux imports
import { getDemoAction } from '../actions/fxCalculatorActions';
import { connect } from 'react-redux';

// component imports
import FxCalculator from './FxCalculator';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default connect()(App);
