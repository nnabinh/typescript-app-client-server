import { fork, all } from 'redux-saga/effects';
import employee from './employee';
import performanceReview from './performanceReview';

const sagas = [
  employee,
  performanceReview,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
