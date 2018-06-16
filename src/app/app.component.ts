import { Component, OnInit } from '@angular/core';
import { Video } from './models/video';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import * as fromVideos from './reducers/videos/videos.reducer'
import * as fromVideoInfo from './reducers/selected-video-info/selected-video-info.reducer'
import { SelectVideo } from './actions/videos.actions';
import { State } from './reducers'
import { SelectVideoInfoUpdatePlaying, SelectVideoInfoUpdateCurrentTime } from './actions/select-video-info.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HLS Video Player';
  videos$: Observable<Video[]> = this.store.pipe(select(fromVideos.getVideos));
  selectedVideo$: Observable<Video> = this.store.pipe(select(fromVideos.getSelectedVideo));
  selectedVideoInfo$: Observable<fromVideoInfo.State> = this.store.pipe(select(fromVideoInfo.getSelectedVideoInfo));

  constructor(private store: Store<State>) { }

  onSelect(video: Video): void {
    this.store.dispatch(new SelectVideo(video));
  }

  seekNewTime(time) {
    this.store.dispatch(new SelectVideoInfoUpdateCurrentTime(time));
  }

  togglePlay() {
    this.store.dispatch(new SelectVideoInfoUpdatePlaying());
  }
}
