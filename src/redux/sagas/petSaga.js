
// // ===== PET SAGA ===== //
// import {put, takeLatest} from 'redux-saga/effects';
// import axios from 'axios';

// // Adds new pet to the DB
// function* addPet(action) {
//     try {
//         const petResponse = yield axios.post(`/addPet`, action.payload);
//         console.log('addPet Response', petResponse.data);
//         yield put({ type: 'FETCH_PETS', payload: petResponse.data })
//     } catch (error) {
//         console.log('error in postName', error )
//     }
// } // end addPet Saga


// // Watcher Saga
// function* petSaga() {
//     yield takeLatest('ADD_PET', addPet)
// } // end Watcher Saga petSaga

// export default petSaga;