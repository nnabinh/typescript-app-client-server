import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { EmployeeActionTypes, getListSuccess } from '../actions/employee';
import { API_ROUTES } from '../util/api';
import { remove } from '../actions/employee';

function* getList() {
  try {
    const response = yield fetch(API_ROUTES.EMPLOYEE_LIST).then(res => res.json());
    yield put(getListSuccess(response.employees));
  } catch (err) {
    alert(err);
  }
}

type Test = ActionType<typeof remove>;
function* remove(action: Test) {
  try {
    yield call(fetch, API_ROUTES.REMOVE + action, {
      method : 'POST',
      headers : {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type' :'multipart/form-data, application/x-www-form-urlencoded; charset=utf-8'
      },
      body : formData
    })
    const response = yield call(fetch, API_ROUTES.REMOVE + , {
      method: 'POST',
    });;
    yield put(getListSuccess(response.employees));
  } catch (err) {
    alert(err);
  }
}

export default function* employeeSagas() {
  yield takeLatest(EmployeeActionTypes.GET_LIST, getList);
  yield takeLatest(EmployeeActionTypes.REMOVE, getList);
}
