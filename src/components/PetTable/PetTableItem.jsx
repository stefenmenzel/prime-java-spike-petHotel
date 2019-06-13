import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TableRow, TableCell, Button} from '@material-ui/core';

class PetTableItem extends Component{

    handleCheckin = (idToCheckin) => {
        console.log('checking in/out', idToCheckin);
        //action.payload needs to be id: id
        this.props.dispatch({type:'CHECKIN_PET', payload:{id: idToCheckin}});
    }

    handleRemove = (idToDelete) => {
        console.log("removing pet", idToDelete);
        this.props.dispatch({type:'REMOVE_PET', payload:{id: idToDelete}});
    }

    render(){
        return(
            <TableRow>
                <TableCell>{this.props.pet.owner_id}</TableCell>
                <TableCell>{this.props.pet.name}</TableCell>
                <TableCell>{this.props.pet.type}</TableCell>
                <TableCell>{this.props.pet.color}</TableCell>
                <TableCell>{(this.props.pet.checked_in) ? 'Checked in' : 'Checked out'}</TableCell>
                <TableCell>
                    <Button onClick={() => this.handleCheckin(this.props.pet.id)} variant="contained" color="primary">{(this.props.pet.checked_in) ? 'Check out' : 'Check in'}</Button>
                    <Button onClick={() => this.handleRemove(this.props.pet.id)} variant="contained" color="secondary">Remove Pet</Button>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect()(PetTableItem);