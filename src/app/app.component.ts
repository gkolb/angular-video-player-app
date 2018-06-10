import { Component, OnInit } from '@angular/core';
import { VideoService } from './services/video/video.service';
import { Video } from './models/video';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HLS Video Player';
  videos$: Observable<Video[]>;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos$ = this.videoService.getVideos()
  }
}
