import React, { Component } from 'react';
import { connect } from 'react-redux';

class ownersView extends Component {
    render(){
        return(
            <div>
                <p>TEST</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ownersView);