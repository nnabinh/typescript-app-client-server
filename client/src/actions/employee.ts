import { createStandardAction, ActionType } from 'typesafe-actions';

export enum EmployeeActionTypes {
  GET_LIST = 'employee/GET_LIST',
  GET_LIST_SUCCESS = 'employee/GET_LIST_SUCCESS',
  REMOVE = 'employee/REMOVE',
  ADD = 'employee/ADD',
  ADD_SUCCESS = 'employee/ADD_SUCCESS',
  UPDATE = 'employee/UPDATE',
  UPDATE_SUCCESS = 'employee/UPDATE_SUCCESS'
}

export const getList = createStandardAction(EmployeeActionTypes.GET_LIST)();
export const getListSuccess = createStandardAction(EmployeeActionTypes.GET_LIST_SUCCESS)<any[]>();
export const remove = createStandardAction(EmployeeActionTypes.REMOVE)<string>();
export const add = createStandardAction(EmployeeActionTypes.ADD)<string>();
export const addSuccess = createStandardAction(EmployeeActionTypes.ADD_SUCCESS)<any>();
export const update = createStandardAction(EmployeeActionTypes.UPDATE)<{ id: string, name: string }>();
export const updateSuccess = createStandardAction(EmployeeActionTypes.UPDATE_SUCCESS)<any>();

export type EmployeeActions = ActionType<typeof getList> |
  ActionType<typeof getListSuccess> |
  ActionType<typeof remove> |
  ActionType<typeof add> |
  ActionType<typeof addSuccess> |
  ActionType<typeof update> |
  ActionType<typeof updateSuccess>;

