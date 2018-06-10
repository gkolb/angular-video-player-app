import { Component } from '@angular/core';
import { VideoService } from './services/video/video.service';
import { Video } from './models/video';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HLS Video Player';
  videos$: Observable<Video[]>;

  constructor(private videoService: VideoService) { 
    this.videos$ = this.videoService.getVideos()
  }

  
}
