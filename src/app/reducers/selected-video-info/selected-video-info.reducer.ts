import { Action } from '@ngrx/store';
import * as fromRoot from '../';
// import { VideosActionTypes, VideosActions } from '../../actions/videos.actions';
import { SelectVideoInfoActionTypes, SelectVideoInfoActions } from '../../actions/select-video-info.actions';


export interface State {
  duration: number;
  currentTime: number;
  playPause: string;
  progress: string;
}

export const initialState: State = {
  duration: 0,
  currentTime: 0,
  playPause: 'pause',
  progress: "0"
};

export function reducer(state = initialState, action: SelectVideoInfoActions): State {
  switch (action.type) {

    case SelectVideoInfoActionTypes.UpdateDuration:
    return {
      ...state, 
      duration: action.payload
    }

    case SelectVideoInfoActionTypes.UpdateCurrentTime:
    return {
      ...state, 
      currentTime: action.payload
    }

    default:
      return state;
  }
}

// export const getSelectedVideoInfo= (state: fromRoot.State) => state.videos.videos;
export const getSelectedVideoInfo= (state: fromRoot.State) => state.selectedVideoInfo;