import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div>
                <div> testing nav </div>
                <Link to="/">
                    Dashboard
                </Link>
                <Link to="/owners">
                    Manage Owners
                </Link>
            </div>            
        )
    }
}

export default Nav;