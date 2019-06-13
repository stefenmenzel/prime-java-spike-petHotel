import React, {Component} from 'react'
import {connect} from 'react-redux';
import {TextField, Button} from '@material-ui/core';

class AddOwnerForm extends Component{

    state = {
        name: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_OWNER', payload: this.state})
    }

    handleChange = (propertyToChange, event) => {
        this.setState({
            ...this.state,
            [propertyToChange]: event.target.value,
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add Owner</h2>
                <TextField
                    id="owner name"
                    label="Owner Name"
                    onChange={(e) => this.handleChange('name', e)}
                    margin="normal"
                    variant="outlined"
                    helperText="Got a name?"
                    fullWidth
                />
                <Button type="submit" name="submit" variant="contained" color="primary">Add User</Button>
            </form>
        )
    }
}

export default connect()(AddOwnerForm);