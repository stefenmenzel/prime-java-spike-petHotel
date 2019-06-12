import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPetForm extends Component {

    state = {
        petName: '', 
        petColor: '',
        petType: '', 
        ownerName: ''
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    handleSubmit = (event) => {
       event.preventDefault();
        console.log('in handleSubmit. Good work team.');
        
    }




 render(){
     console.log('state petName: ', this.state.petName);
     console.log('state pet Type: ', this.state.petType);
     console.log('state pet color: ', this.state.petColor);
     
    return(
        <>
        <div>
         <form onSubmit={this.handleSubmit}>
          <h6>Pet Name:</h6>
          <label htmlFor="Pet Name">
          <input type="text" name="Pet Name"  onChange={this.handleInputChangeFor('petName')}></input>
          </label>
          <h6>Pet Color:</h6>
          <label htmlFor="Pet Color">
            <input type="text" name="Pet Color" onChange={this.handleInputChangeFor('petColor')}></input>
          </label>
          <h6>Pet Type:</h6>
           <label htmlFor="Pet Type">
            <input type="text" name="Pet Type" onChange={this.handleInputChangeFor('petType')}></input>
          </label>
          <h6>Owner:</h6>
          <select onChange={this.handleInputChangeFor('ownerName')}>
            <option>Need To</option>
            <option>Map Over</option>
            <option>Owners In</option>
            <option>Database</option>
          </select>
           <button type="submit" name="submit">Submit Pet</button>
         </form>
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

export default connect(mapStateToProps)(AddPetForm);