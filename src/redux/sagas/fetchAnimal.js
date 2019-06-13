// ===== FETCH ANIMALS SAGA ===== //
import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// Adds new pet to the DB
function* fetchPet(action) {
    try {
        const response = yield axios.get(`/pets`);
        console.log('addPet Response', response.data);
        yield put({type: 'SET_PETS', payload: response.data })
    } catch (error) {
        console.log('error in fetchPet', error)
    }
} // end addPet Saga


// Watcher Saga
function* getPets() {
    yield takeLatest('FETCH_PETS', fetchPet)
} // end Watcher Saga petSaga

export default getPets;