import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableRow, TableCell, Button } from '@material-ui/core';

class OwnerTableItem extends Component {

    handleRemove = (idToDelete) => {
        console.log("removing pet", idToDelete);
        this.props.dispatch({ type: 'REMOVE_OWNER', payload: { id: idToDelete } });
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.owner.name}</TableCell>
                {/* <TableCell>{this.props.owner.number_pets}</TableCell> */}                                                
                <TableCell>                    
                    <Button onClick={() => this.handleRemove(this.props.owner.id)} variant="contained" color="secondary">Remove Owner</Button>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect()(OwnerTableItem);