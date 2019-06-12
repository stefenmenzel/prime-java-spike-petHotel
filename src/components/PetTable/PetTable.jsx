import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetTable extends Component {

 render(){
  return(
   <>
   <h2>History</h2>
   <div>
    <table>
      <thead>
        <tr>
        <th>Owner</th>
        <th>Pet</th>
        <th>Animal Type</th>
        <th>Color</th>
        <th>Checked In</th>
        <th>Actions</th>
       </tr>
      </thead>
      <tbody>
        <tr>
         <td>Need</td>
         <td>To</td>
         <td>Map</td>
         <td>Over</td>
         <td>Reducer</td>
         <td>Here</td>
        </tr>
      </tbody>
    </table>
   
   
   </div> 
  
   </>
  )
 }

}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(PetTable);