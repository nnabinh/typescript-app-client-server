import { createStandardAction, ActionType } from 'typesafe-actions';

export enum PerformanceReviewActionTypes {
  GET_LIST = 'performanceReview/GET_LIST',
  GET_LIST_SUCCESS = 'performanceReview/GET_LIST_SUCCESS',
}

export const getList = createStandardAction(PerformanceReviewActionTypes.GET_LIST)();
export const getListSuccess = createStandardAction(PerformanceReviewActionTypes.GET_LIST_SUCCESS)<any[]>();

export type PerformanceReviewActions = ActionType<typeof getList> |
  ActionType<typeof getListSuccess>;

