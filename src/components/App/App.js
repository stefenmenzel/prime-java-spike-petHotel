import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav.jsx';
import ownersView from '../OwnersView/ownersview.js';
import PetView from '../PetView/PetView.jsx';
import AddPetForm from '../AddPetForm/AddPetForm.jsx';
import PetTable from '../PetTable/PetTable.jsx';

class App extends Component {

  render(){
   return(
     <Router>
       <div>
         <header>
           <h1 className="App-header">Really Snazzy Pet Spa</h1>
           <Nav />
           <h4>We'll For Sure Be Nice To Your Pet.</h4>           
         </header>
       </div>
       <Route
       exact path="/owners"
       component={ownersView}
      />
      <Route
        exact path="/"
        component={PetView}
      />
      {/* <AddPetForm />
      <PetTable /> */}
     </Router>
   )
  }

}


export default App;
