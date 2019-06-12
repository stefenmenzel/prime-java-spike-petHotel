import { all } from 'redux-saga/effects';
import petSaga from './petSaga';

export default function* rootSaga(){
    yield all([
        petSaga(),
    ]);
}