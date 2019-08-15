import { createStandardAction, ActionType } from 'typesafe-actions';

export enum EmployeeActionTypes {
  GET_LIST = 'employee/GET_LIST',
  GET_LIST_SUCCESS = 'employee/GET_LIST_SUCCESS',
  REMOVE = 'employee/REMOVE'
}

export const getList = createStandardAction(EmployeeActionTypes.GET_LIST)();
export const getListSuccess = createStandardAction(EmployeeActionTypes.GET_LIST_SUCCESS)<any[]>();
export const remove = createStandardAction(EmployeeActionTypes.REMOVE)<string>();

export type EmployeeActions = ActionType<typeof getList> |
  ActionType<typeof getListSuccess>|
  ActionType<typeof remove>;

