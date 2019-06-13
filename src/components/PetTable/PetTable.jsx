import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


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
        <TableRow>
         <TableCell>Need</TableCell>
         <TableCell>To</TableCell>
         <TableCell>Map</TableCell>
         <TableCell>Over</TableCell>
         <TableCell>Reducer</TableCell>
         <TableCell>Here</TableCell>
        </TableRow>
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