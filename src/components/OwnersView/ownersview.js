import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddOwnerForm from '../AddOwnerForm/AddOwnerForm';
import OwnerTable from '../OwnerTable/OwnerTable';

class ownersView extends Component {
    render(){
        return(
            <div>
                <AddOwnerForm />
                <OwnerTable />
            </div>
        )
    }
}


export default ownersView;