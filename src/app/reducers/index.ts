import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Video } from '../models/video';
import * as fromVideos from './videos/videos.reducer';
import * as fromSelectedVideoInfo from './selected-video-info/selected-video-info.reducer';

export interface State {
  videos: fromVideos.State;
  selectedVideoInfo: fromSelectedVideoInfo.State;

}

export const reducers: ActionReducerMap<State> = {

  videos: fromVideos.reducer,

  selectedVideoInfo: fromSelectedVideoInfo.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];