import { Directive, ElementRef, Input, OnChanges, HostListener, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'

import * as fromVideos from '../reducers/videos/videos.reducer';
import * as fromSelectVideoInfo from '../reducers/selected-video-info/selected-video-info.reducer';
import * as Hls from 'hls.js';
import { Video } from '../models/video';
import { SelectVideo } from '../actions/videos.actions';
import { SelectVideoInfoUpdateCurrentTime, SelectVideoInfoUpdateDuration } from '../actions/select-video-info.actions';
import { State } from '../reducers'

@Directive({
  selector: '[loadVideo]'
})
export class LoadVideoDirective implements OnChanges {
  @Input() selectedVideo: Video;
  @Input() selectedVideoInfo: any;
  
  constructor(private store: Store<fromSelectVideoInfo.State>, private el: ElementRef) { }

  updateVideo(): void {
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
      })
    }
  }

  @HostListener('timeupdate') onTimeChange() {
    let currentTime = Math.floor(this.el.nativeElement.currentTime);
    this.store.dispatch(new SelectVideoInfoUpdateCurrentTime(currentTime));
  }
  
  @HostListener('durationchange') onDurationChange() {
    let duration = Math.floor(this.el.nativeElement.duration);
    this.store.dispatch(new SelectVideoInfoUpdateDuration(duration));
  }

  playPauseVideo(changes: any): void {
    let oldPlayingValue = changes.selectedVideoInfo.previousValue.isPlaying;
    let newPlayingValue = changes.selectedVideoInfo.currentValue.isPlaying;
    let hasChangedPlaying = oldPlayingValue !== newPlayingValue;
    if (hasChangedPlaying) {
      let video = this.el.nativeElement;
      let method = newPlayingValue ? 'play' : 'pause';
      video[method]();
    }
  }

  updateVideoTime(): void {
    let video = this.el.nativeElement;
    if (Math.floor(video.currentTime) !== this.selectedVideoInfo.currentTime) {
      video.currentTime = this.selectedVideoInfo.currentTime;
    }
  }

  ngOnChanges(changes: any): void {
    if (changes.selectedVideo) {
      this.updateVideo();
    }

    if (changes.selectedVideoInfo && !changes.selectedVideoInfo.firstChange) {
      this.playPauseVideo(changes);
      this.updateVideoTime();
    }
  }
}
