import { Action } from '@ngrx/store';
import { Video } from '../models/video';

export enum VideosActionTypes {
  SelectVideo = '[Video] Select Video'
}

export class SelectVideo implements Action {
  readonly type = VideosActionTypes.SelectVideo;

  constructor(public payload: Video) {}
}

export type VideosActions = SelectVideo;
