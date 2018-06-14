import { Component, OnInit } from '@angular/core';
import { VideoService } from './services/video/video.service';
import { Video } from './models/video';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import * as fromVideos from './reducers/videos/videos.reducer'
import { SelectVideo } from './actions/videos.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HLS Video Player';
  // videos: Video[];
  videos$: Observable<Video[]> = this.store.pipe(select(fromVideos.getVideos));
  selectedVideo$: Observable<Video> = this.store.pipe(select(fromVideos.getSelectedVideo));
  // selectedVideo: Video;

  constructor(private store: Store<fromVideos.State>) { 
    // this.videos$ = this.store.pipe(select(fromVideos.getVideos));
    // this.selectedVideo$ ;
  }

  onSelect(video: Video): void {
    // this.selectedVideo = video;
    this.store.dispatch(new SelectVideo(video));
  }

  // ngOnInit() {
  //   this.videos = this.videoService.getVideos();
  //   this.selectedVideo = this.videos[0];
  // }
}
