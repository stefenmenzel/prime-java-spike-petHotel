
// ===== PET SAGA ===== //
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// Adds new pet to the DB
function* addPet(action) {
    try {
        const petResponse = yield axios.post(`/addPet`, action.payload);
        console.log('addPet Response', petResponse.data);
        yield put({ type: 'FETCH_PETS', payload: petResponse.data })
    } catch (error) {
        console.log('error in postName', error )
    }
} // end addPet Saga

function* checkinPet(action){
    try{
        yield axios.put(`/checkPet/${action.payload.id}`);
        yield put({type: 'FETCH_PETS'});
    }catch(error){
        console.log('error in CheckinPet request', error);
    }
}

function* removePet(action){
    try{
        yield axios.delete(`/pets/delete/${action.payload.id}`);
        yield put({type: 'FETCH_PETS'});
    }catch(error){
        console.log('error in remove pet request:', error);
    }
}


// Watcher Saga
function* petSaga() {
    yield takeLatest('ADD_PET', addPet)
    yield takeLatest('CHECKIN_PET', checkinPet);
    yield takeLatest('REMOVE_PET', removePet);
} // end Watcher Saga petSaga

export default petSaga;