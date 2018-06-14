import { Directive, ElementRef, Input, OnInit, OnChanges, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'

import * as fromVideos from '../reducers/videos/videos.reducer';
import * as fromSelectVideoInfo from '../reducers/selected-video-info/selected-video-info.reducer';
import * as Hls from 'hls.js';
import { Video } from '../models/video';
import { SelectVideo } from '../actions/videos.actions';
import { SelectVideoInfoUpdateCurrentTime, SelectVideoInfoUpdateDuration } from '../actions/select-video-info.actions';

@Directive({
  selector: '[loadVideo]'
})
export class LoadVideoDirective implements OnInit, OnChanges {

  // selectedVideo$: Observable<Video> = this.store.pipe(select(fromVideos.getSelectedVideo));
  // selectedVideoUrl: String = this.selectedVideo$.subscribe((selectedVideo) => selectedVideo.url);
  // selectedVideoInfo$: Observable<fromSelectVideoInfo.State> = this.store.pipe(select(fromSelectVideoInfo.getSelectedVideoInfo));
  @Input() selectedVideo: Video;

  constructor(private store: Store<fromSelectVideoInfo.State>, private el: ElementRef) { }

  duration: number;
  currentTime: number;
  playPause: string;
  progress: string = "0";

  updateVideo() {
    console.log('loadVideo directive native el', this.el.nativeElement);
    console.log('directive selectedVideo', this.selectedVideo)
    if(Hls.isSupported() && this.el) {
      const context = this;
      const video = this.el.nativeElement;
      const hls = new Hls();
      hls.loadSource(this.selectedVideo.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.pause();
        video.currentTime = "0";
        video.play();
        // context.playPause='Pause';
      })
      // this.el.nativeElement.addEventListener('timeupdate', this.handleTimeChange.bind(this));
      // this.el.nativeElement.addEventListener('durationchange', this.setDuration.bind(this));
    }
  }

  @HostListener('timeupdate') onTimeChange() {
    let currentTime = Math.floor(this.el.nativeElement.currentTime);
    console.log('currentTime', currentTime);
    this.store.dispatch(new SelectVideoInfoUpdateCurrentTime(currentTime));
  }
  
  @HostListener('durationchange') onDurationChange() {
    let duration = Math.floor(this.el.nativeElement.duration);
    console.log('duration event', duration)
    this.store.dispatch(new SelectVideoInfoUpdateDuration(duration));
  }
  
  // togglePlay() {
  //   const video = this.el.nativeElement;
  //   const method = video.paused ? 'play' : 'pause';
  //   this.playPause = video.paused ? 'Pause' : 'Play';
  //   video[method]();
  // }

  // updateProgress(e){
  //   console.log(e)
  //   const video = this.el.nativeElement;
  //   const newTime = ((e.clientX - 7) / video.clientWidth) * video.duration;
  //   if (!isNaN(newTime)) {
  //     video.currentTime = newTime;
  //     this.progress = (newTime / this.duration * 100).toString();
  //   }
  // }

  ngOnInit() {
    // this.updateVideo();
    // console.log('directive selectedVideo init', this.selectedVideo)
  }

  ngOnChanges() {
    this.updateVideo();
    console.log('directive selectedVideo onChange', this.selectedVideo);
  }
}
