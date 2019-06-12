import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem } from '@material-ui/core';

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
        this.props.dispatch({
            type: 'ADD_PET',
            payload: this.state
        })
    }; // end handleSubmit




 render(){
     console.log('state petName: ', this.state.petName);
     console.log('state pet Type: ', this.state.petType);
     console.log('state pet color: ', this.state.petColor);
     
    return(
        <>
        <div>
         <form onSubmit={this.handleSubmit}>
          <TextField 
           id="Pet Name"
           label="Pet Name"
           onChange={this.handleInputChangeFor('petName')}
           margin="normal"
           variant="outlined"
           helperText="What's Your Pets Name, Punk?"
           fullWidth
          />
          <TextField 
           id="Pet Color"
           label="Pet Color"
           onChange={this.handleInputChangeFor('petColor')}
           margin="normal"
           variant="outlined"
           helperText="It's gotta be a color. Don't be weird."
           fullWidth
          />
          <TextField 
            id="Pet Type"
            label="Pet Type"
            onChange={this.handleInputChangeFor('petType')}
            margin="normal"
            variant="outlined"
            fullWidth
            helperText="If it's a snake, don't lie and say it's a puppy"
          />
          <TextField 
           select
           label="Owner"
           variant="outlined"
           onChange={this.handleInputChangeFor('ownerName')}
           helperText="Who Are You Really?"
           margin="normal"
           fullWidth
          >
            <MenuItem>Need</MenuItem>
            <MenuItem>To</MenuItem>
            <MenuItem>Get</MenuItem>
            <MenuItem>Reducer</MenuItem>
            <MenuItem>Stuff</MenuItem>
          </TextField>
        
           <Button type="submit" name="submit" variant="contained" color="primary">Submit Pet</Button>
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