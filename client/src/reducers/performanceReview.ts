import { Reducer } from 'redux';
import { keyBy } from 'lodash';
import { PerformanceReviewActionTypes, PerformanceReviewActions } from '../actions/performanceReview';

type PerformanceReviewState = {
  readonly allIds: string[];
  readonly byId: { [id: string]: any };
}

const initialState = {
  allIds: [],
  byId: {},
};

const performanceReview: Reducer<PerformanceReviewState, PerformanceReviewActions> = (state = initialState, action: PerformanceReviewActions) => {
  switch (action.type) {
    case PerformanceReviewActionTypes.GET_LIST_SUCCESS: {
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

export default performanceReview;
