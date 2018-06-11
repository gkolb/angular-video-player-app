import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import * as Hls from 'hls.js';
import { Video } from '../models/video'
import { VideoPlayerService } from '../services/video-player/video-player.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() selectedVideo: Video;
  @ViewChild('videoPlayer') videoPlayerElement: ElementRef;

  constructor(private videoPlayerService: VideoPlayerService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.updateVideo();
    this.videoPlayerService.updateVideo(this.selectedVideo, 'videoPlayer');
  }

  ngOnChanges() {
    // this.updateVideo();
    this.videoPlayerService.updateVideo(this.selectedVideo, 'videoPlayer');
  }

}
