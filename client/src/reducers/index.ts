import { combineReducers } from 'redux';
import employee from './employee';

const rootReducer = combineReducers({
  model: combineReducers({
    employee,
  }),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
