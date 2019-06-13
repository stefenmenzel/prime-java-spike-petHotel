import React, {Component} from 'react';
import AddPetForm from '../AddPetForm/AddPetForm';
import PetTable from '../PetTable/PetTable';

class PetView extends Component{

    render(){
        return(
            <>
            <AddPetForm />
            <PetTable />
            </>
        )
    }
}

export default PetView;