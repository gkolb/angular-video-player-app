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
  videos: Video[];
  selectedVideo: Video;

  constructor(private videoService: VideoService) { }

  onSelect(video: Video): void {
    this.selectedVideo = video;
    console.log(video)
  }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.selectedVideo = this.videos[0];
  }
}
