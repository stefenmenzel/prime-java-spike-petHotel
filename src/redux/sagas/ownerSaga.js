import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* getOwners(action){
    try{
        const ownerResponse = yield axios.get('/owners');
        yield put({type: 'SET_OWNERS', payload: ownerResponse.data});
    }catch(error){
        console.log('error in getOwners request:', error);
    }
}

function* addOwner(action){
    try{
        yield axios.post('/addOwner', action.payload);
        yield put({type: 'FETCH_OWNERS'});
    }catch(error){
        console.log('error in addOwner request:', error);
    }
}

function* deleteOwner(action){
    try{
        yield axios.delete(`/owners/delete/${action.payload.id}`);
        yield put({type:'FETCH_OWNERS'});
    }catch(error){
        console.log('error in delete owner request:', error);
    }
}

function* ownerSaga(){
    yield takeLatest('FETCH_OWNERS', getOwners);
    yield takeLatest('ADD_OWNER', addOwner);
    yield takeLatest('REMOVE_OWNER', deleteOwner);
}

export default ownerSaga;