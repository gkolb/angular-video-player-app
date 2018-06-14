import { Action } from '@ngrx/store';

export enum SelectVideoInfoActionTypes {
  UpdateDuration = '[SelectVideoInfo] Update Duration',
  UpdateCurrentTime = '[SelectVideoInfo] Update Current Time'
}

export class SelectVideoInfoUpdateDuration implements Action {
  readonly type = SelectVideoInfoActionTypes.UpdateDuration;

  constructor(public payload: number) {}
}

export class SelectVideoInfoUpdateCurrentTime implements Action {
  readonly type = SelectVideoInfoActionTypes.UpdateCurrentTime;

  constructor(public payload: number) {}
}


export type SelectVideoInfoActions = SelectVideoInfoUpdateDuration | SelectVideoInfoUpdateCurrentTime;
