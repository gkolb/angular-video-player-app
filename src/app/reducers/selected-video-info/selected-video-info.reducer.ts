import { Action } from '@ngrx/store';
import * as fromRoot from '../';
import { SelectVideoInfoActionTypes, SelectVideoInfoActions } from '../../actions/select-video-info.actions';


export interface State {
  duration: number;
  currentTime: number;
  isPlaying: boolean;
}

export const initialState: State = {
  duration: 0,
  currentTime: 0,
  isPlaying: true,
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

    case SelectVideoInfoActionTypes.UpdatePlaying:
    return {
      ...state, 
      isPlaying: !state.isPlaying
    }

    default:
      return state;
  }
}

export const getSelectedVideoInfo= (state: fromRoot.State) => state.selectedVideoInfo;
export const getIsPlaying= (state: fromRoot.State) => state.selectedVideoInfo.isPlaying;