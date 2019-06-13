import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableCell, TableRow, TableHead} from '@material-ui/core';
import OwnerTableItem from './OwnerTableItem.jsx';

class OwnerTable extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_OWNERS'});
    }

    render(){
        return(
            <div>
                <h2>Owners</h2>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Number of Pets</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.owners.map(owner => {
                                return <OwnerTableItem key={owner.id} owner={owner} />
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        owners: reduxState.ownerReducer
    }
}

export default connect(mapStateToProps)(OwnerTable);