import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import PetTableItem from './PetTableItem.jsx';


class PetTable extends Component {

 render(){
  return(
   <>
   <h2>History</h2>
   <div>
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>Owner</TableCell>
        <TableCell>Pet</TableCell>
        <TableCell>Animal Type</TableCell>
        <TableCell>Color</TableCell>
        <TableCell>Checked In</TableCell>
        <TableCell>Actions</TableCell>
       </TableRow>
      </TableHead>
      <TableBody>
        {this.props.pets.map(pet => {
          return <PetTableItem key={pet.id} pet={pet} />
        })}
      </TableBody>
    </Table>
   </div> 
  
   </>
  )
 }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState,
        pets: reduxState.petReducer
    }
}

export default connect(mapStateToProps)(PetTable);