import { Injectable } from '@angular/core';

import * as Hls from 'hls.js';
import { Video } from '../../models/video';

@Injectable()
export class VideoPlayerService {

  constructor() { }
  
  public videoElement: any;
  public duration: number;
  public currentTime: number;
  public playPause: string;
  public progress: number = 0;
  public title: string;

  updateVideo(selectedVideo: Video, videoId: string): void {
    this.title = selectedVideo.title;
    this.videoElement = <HTMLVideoElement> document.getElementById(videoId);
    if(Hls.isSupported() && this.videoElement && selectedVideo.url) {
      const context = this;
      const video = this.videoElement;
      const hls = new Hls();
      hls.loadSource(selectedVideo.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.currentTime = "0";
        video.play();
        context.playPause = 'Pause';
      })
      this.videoElement.addEventListener('timeupdate', this.handleTimeChange.bind(this));
      this.videoElement.addEventListener('durationchange', this.setDuration.bind(this));
    }
  }

  handleTimeChange(): void {
    this.currentTime = Math.floor(this.videoElement.currentTime);
    this.progress = (this.currentTime / this.duration * 100);
  }
  
  setDuration(): void {
    this.duration = Math.floor(this.videoElement.duration);
  }
  
  togglePlay(): void {
    const video = this.videoElement;
    const method = video.paused ? 'play' : 'pause';
    this.playPause = video.paused ? 'Pause' : 'Play';
    video[method]();
  }

  updateProgress(e): void {
    const video = this.videoElement;
    const newTime = ((e.clientX - 7) / video.clientWidth) * video.duration;
    if (!isNaN(newTime)) {
      video.currentTime = newTime;
      this.progress = (newTime / this.duration * 100);
    }
  }
}
