import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import './App.css';
import ownersView from '../OwnersView/ownersview.js';
import AddPetForm from '../AddPetForm/AddPetForm.jsx';


class App extends Component {

  render(){
   return(
     <Router>
       <div>
         <header>
           <h1 className="App-header">Really Snazzy Pet Spa</h1>
         </header>
       </div>
       <Route
       path="/owners"
       component={ownersView}
      />
      <AddPetForm />
     </Router>
   )
  }

}


export default App;
