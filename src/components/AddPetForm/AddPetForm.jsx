import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem } from '@material-ui/core';

class AddPetForm extends Component {

    state = {
        name: '', 
        color: '',
        type: '', 
        date: new Date().toISOString().substr(0, 10),
        owner_id: ''
    }

    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_PETS' });
        this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            ...this.state,
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
     console.log('this.state:', this.state);
     
    return(
        <>
        <div>
         <form onSubmit={this.handleSubmit}>
          <TextField 
           id="Pet Name"
           label="Pet Name"
           onChange={this.handleInputChangeFor('name')}
           margin="normal"
           variant="outlined"
           helperText="What's Your Pets Name, Punk?"
           fullWidth
          />
          <TextField 
           id="Pet Color"
           label="Pet Color"
           onChange={this.handleInputChangeFor('color')}
           margin="normal"
           variant="outlined"
           helperText="It's gotta be a color. Don't be weird."
           fullWidth
          />
          <TextField 
            id="Pet Type"
            label="Pet Type"
            onChange={this.handleInputChangeFor('type')}
            margin="normal"
            variant="outlined"
            fullWidth
            helperText="If it's a snake, don't lie and say it's a puppy. We'll know."
          />
          <TextField 
           select
           label="Owner"
           variant="outlined"
           onChange={this.handleInputChangeFor('owner_id')}
           helperText="Who Are You Really?"
           margin="normal"
           fullWidth
          >
            {this.props.reduxState.ownerReducer.map(owner => {
                return <MenuItem value={owner.id}>{owner.name}</MenuItem>
            })}
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