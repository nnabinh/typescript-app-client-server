import { fork, all } from 'redux-saga/effects';
import employee from './employee';

const sagas = [
  employee,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
