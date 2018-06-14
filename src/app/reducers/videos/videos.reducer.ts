import { Action } from '@ngrx/store';
import { Video } from '../../models/video';
import { VIDEOS } from '../../mock-videos';
import * as fromRoot from '../';
import { VideosActionTypes, VideosActions } from '../../actions/videos.actions';


export interface State {
  videos: Video[];
  selectedVideo: Video;
}

export const initialState: State = {
  videos: VIDEOS,
  selectedVideo: VIDEOS[0]
};

export function reducer(state = initialState, action: VideosActions): State {
  switch (action.type) {
    case VideosActionTypes.SelectVideo:
      return {
        ...state, 
        selectedVideo: action.payload
      }

    default:
      return state;
  }
}

export const getVideos= (state: fromRoot.State) => state.videos.videos;
export const getSelectedVideo= (state: fromRoot.State) => state.videos.selectedVideo;