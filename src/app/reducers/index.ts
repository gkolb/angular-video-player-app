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

export interface State {
  videos: fromVideos.State;
}

export const reducers: ActionReducerMap<State> = {

  videos: fromVideos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];