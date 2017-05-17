import React, { Component, PropTypes } from 'react';

// import component of layout container...

// import scss


// import action
import { getDemoAction } from '../actions/myActions';

import { connect } from 'react-redux';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>golf test</div>
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
