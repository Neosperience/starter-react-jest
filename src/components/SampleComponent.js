import React from 'react';

import { connect } from 'react-redux';
import { /* a set of actions to import */someAction } from '../actions';


class SampleComponent extends React.Component {

    componentDidMount () {
        this.props.someAction();
    }


    render () {
        const { someStateVariable } = this.props; // extract required variable from props
        return (
            <div>
                {/* render someStateVariable keys here */ someStateVariable !== undefined }
            </div>
        );
    }
}

function mapStateToProps ({ /* extract relevant property from state */ someStateVariable }) {
    return { /* return an object containing properties to map into this.props */ someStateVariable };
}

export default connect(mapStateToProps, { /* your actions here*/ someAction })(SampleComponent);
