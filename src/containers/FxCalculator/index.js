// react
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// redux
import { connect } from 'react-redux';

// component imports

// scss module
import styles from './styles.scss';

class FxCalculator extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    
    // mount
    render () {
        return (
            <div className={styles.flexContainer}>
                Forex
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        getDemoAction: state.fxCalculatorReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDemoAction: () => {
            dispatch(getDemoAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FxCalculator);