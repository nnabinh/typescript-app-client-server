import { combineReducers } from 'redux';
import employee from './employee';
import performanceReview from './performanceReview';

const rootReducer = combineReducers({
  model: combineReducers({
    employee,
    performanceReview,
  }),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
