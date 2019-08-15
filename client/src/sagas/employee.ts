import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { EmployeeActionTypes, getListSuccess, remove, getList, add, addSuccess, update, updateSuccess } from '../actions/employee';
import { API_EMPLOYEE_ROUTES } from '../util/api';

function* onGetList() {
  try {
    const response = yield call(fetch, API_EMPLOYEE_ROUTES.GET_LIST);
    const body = yield response.json();
    yield put(getListSuccess(body.employees));
  } catch (err) {
    alert(err);
  }
}

function* onRemove(action: ActionType<typeof remove>) {
  try {
    yield call(fetch, API_EMPLOYEE_ROUTES.REMOVE + action.payload, {
      method : 'POST',
    })
    yield put(getList());
  } catch (err) {
    alert(err);
  }
}

function* onAdd(action: ActionType<typeof add>) {
  try {
    const response = yield call(fetch, API_EMPLOYEE_ROUTES.ADD + action.payload, {
      method : 'POST',
    })
    const body = yield response.json();
    yield put(addSuccess(body.employee));
  } catch (err) {
    alert(err);
  }
}

function* onUpdate(action: ActionType<typeof update>) {
  try {
    const { id, name } = action.payload;
    const response = yield call(fetch, API_EMPLOYEE_ROUTES.UPDATE + `${id}/${name}`, {
      method : 'POST',
    })
    const body = yield response.json();
    yield put(updateSuccess(body.employee));
  } catch (err) {
    alert(err);
  }
}

export default function* employeeSagas() {
  yield takeLatest(EmployeeActionTypes.GET_LIST, onGetList);
  yield takeLatest(EmployeeActionTypes.REMOVE, onRemove);
  yield takeLatest(EmployeeActionTypes.ADD, onAdd);
  yield takeLatest(EmployeeActionTypes.UPDATE, onUpdate);
}
