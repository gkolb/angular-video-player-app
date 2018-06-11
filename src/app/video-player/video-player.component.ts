import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import * as Hls from 'hls.js';
import { Video } from '../models/video'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() selectedVideo: Video;
  @ViewChild('videoPlayer') videoPlayerElement: ElementRef;

  updateVideo(): void {
    console.log(this.videoPlayerElement)
    if(Hls.isSupported() && this.videoPlayerElement) {
      const video = this.videoPlayerElement.nativeElement;
      console.log('native element',video);
      const hls = new Hls();
      hls.loadSource(this.selectedVideo.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.pause();
        video.currentTime = "0";
        video.play();
      })
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.updateVideo();
  }

  ngOnChanges() {
    this.updateVideo();
  }

}
