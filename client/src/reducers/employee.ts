import { Reducer } from 'redux';
import { keyBy } from 'lodash';
import { EmployeeActionTypes, EmployeeActions } from '../actions/employee';

type EmployeeState = {
  readonly allIds: string[];
  readonly byId: { [id: string]: any };
}

const initialState = {
  allIds: [],
  byId: {},
};

const employee: Reducer<EmployeeState, EmployeeActions> = (state = initialState, action: EmployeeActions) => {
  switch (action.type) {
    case EmployeeActionTypes.GET_LIST_SUCCESS: {
      return {
        ...state,
        allIds: action.payload.map(({ _id }) => _id),
        byId: keyBy(action.payload, '_id'),
      };
    }
    default:
      return state;
  }
};

export default employee;
