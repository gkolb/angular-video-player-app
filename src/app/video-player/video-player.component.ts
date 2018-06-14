import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import * as Hls from 'hls.js';
import { Video } from '../models/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() selectedVideo: Video;
  @ViewChild('videoPlayer') videoPlayerElement: ElementRef;

  duration: number;
  currentTime: number;
  playPause: string;
  progress: string = "0";

  constructor() {}

  updateVideo(): void {
    console.log(this.videoPlayerElement)
    if(Hls.isSupported() && this.videoPlayerElement) {
      const context = this;
      const video = this.videoPlayerElement.nativeElement;
      const hls = new Hls();
      hls.loadSource(this.selectedVideo.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.pause();
        video.currentTime = "0";
        video.play();
        context.playPause='Pause';
      })
      this.videoPlayerElement.nativeElement.addEventListener('timeupdate', this.handleTimeChange.bind(this));
      this.videoPlayerElement.nativeElement.addEventListener('durationchange', this.setDuration.bind(this));
    }
  }

  handleTimeChange(): void {
    this.currentTime = Math.floor(this.videoPlayerElement.nativeElement.currentTime);
  }
  
  setDuration(): void {
    this.duration = Math.floor(this.videoPlayerElement.nativeElement.duration);
  }
  
  togglePlay() {
    const video = this.videoPlayerElement.nativeElement;
    const method = video.paused ? 'play' : 'pause';
    this.playPause = video.paused ? 'Pause' : 'Play';
    video[method]();
  }

  updateProgress(e){
    console.log(e)
    const video = this.videoPlayerElement.nativeElement;
    const newTime = ((e.clientX - 7) / video.clientWidth) * video.duration;
    if (!isNaN(newTime)) {
      video.currentTime = newTime;
      this.progress = (newTime / this.duration * 100).toString();
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
