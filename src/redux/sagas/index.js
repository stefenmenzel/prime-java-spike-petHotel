import { all } from 'redux-saga/effects';
import petSaga from './petSaga';
import getPets from './fetchAnimal.js';

export default function* rootSaga(){
    yield all([
        petSaga(),
        getPets()
    ]);
}