import { Action } from '@ngrx/store';

export enum SelectVideoInfoActionTypes {
  UpdateDuration = '[SelectVideoInfo] Update Duration',
  UpdateCurrentTime = '[SelectVideoInfo] Update Current Time',
  UpdatePlaying = '[SelectVideoInfo] Update Playing'
}

export class SelectVideoInfoUpdateDuration implements Action {
  readonly type = SelectVideoInfoActionTypes.UpdateDuration;

  constructor(public payload: number) {}
}

export class SelectVideoInfoUpdateCurrentTime implements Action {
  readonly type = SelectVideoInfoActionTypes.UpdateCurrentTime;

  constructor(public payload: number) {}
}

export class SelectVideoInfoUpdatePlaying implements Action {
  readonly type = SelectVideoInfoActionTypes.UpdatePlaying;

}

export type SelectVideoInfoActions = SelectVideoInfoUpdateDuration | SelectVideoInfoUpdateCurrentTime | SelectVideoInfoUpdatePlaying;
