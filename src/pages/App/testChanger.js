import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testActions } from '../../state/ducks/testState';
import PropTypes from 'prop-types'; 

const propTypes = {
    changeTestState: PropTypes.func, 
};

class TestChanger extends Component {

    changeTest = (newState) => {
        this.props.changeTestState(newState);
    }
    
    render() {
        return (
            <div className="test-changer-wrapper" data-test="test-changer-component">
                <button onClick={ () => this.changeTest(true) }>testState: true</button>
                <button onClick={ () => this.changeTest(false) }>testState: false</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeTestState: testActions.changeTestState
    }, dispatch);
}

TestChanger.propTypes = propTypes;

export { TestChanger };

export default connect(null, mapDispatchToProps)(TestChanger);