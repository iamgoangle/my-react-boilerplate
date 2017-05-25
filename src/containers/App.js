// react import
import React, { Component, PropTypes } from 'react';

// redux imports
import { getDemoAction } from '../actions/myActions';
import { connect } from 'react-redux';

// component imports
import Calculator from './Calculator';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <Calculator></Calculator>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        getDemoAction: state.myReducer.testReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDemoAction: () => {
            dispatch(getDemoAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
