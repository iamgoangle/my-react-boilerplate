import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { connect } from 'react-redux';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    handleClickButton (iObj = {}) {

    }
    
    render () {
        <Box>
            <DisplaySymbol data={this.state.data}></DisplaySymbol>
            <Buttons buttonSet={this.state.buttonSet} onClickButton={this.handleClickButton(iObj = {})}></Buttons>
        </Box>
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