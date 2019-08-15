import { takeLatest, call, put } from 'redux-saga/effects';
import { PerformanceReviewActionTypes, getListSuccess } from '../actions/performanceReview';
import { API_PERFORMANCE_REVIEW_ROUTES } from '../util/api';

function* onGetList() {
  try {
    const response = yield call(fetch, API_PERFORMANCE_REVIEW_ROUTES.GET_LIST);
    const body = yield response.json();
    yield put(getListSuccess(body.performanceReviews));
  } catch (err) {
    alert(err);
  }
}

export default function* employeeSagas() {
  yield takeLatest(PerformanceReviewActionTypes.GET_LIST, onGetList);
}
