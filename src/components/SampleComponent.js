import React from 'react';

import { connect } from 'react-redux';
import { /* a set of actions to import */ } from '../actions';


class SampleComponent extends React.Component {

    componentDidMount () {
        this.props.action01();
    }


    render () {
        const { someVariable } = this.props; // extract required variable from props
        return (
            <div>
                {someVariable}
            </div>
        );
    }
}

function mapStateToProps ({ /* extract relevant property from state */ }) {
    return { /* return an object containing properties to map into this.props */ };
}

export default connect(mapStateToProps, { /* your actions here*/ })(SampleComponent);
