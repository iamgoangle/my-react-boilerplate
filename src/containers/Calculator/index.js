// react
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// redux
import { connect } from 'react-redux';

// component imports

// scss imports
import calculator from './styles.scss';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        console.log(calculator);
    }
    
    // mount
    render () {
        return (
            <div className={calculator.red}>
                test
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);