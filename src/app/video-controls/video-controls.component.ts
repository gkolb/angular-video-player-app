import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { getSelectedVideo } from '../reducers/videos/videos.reducer';
import { getSelectedVideoInfo } from '../reducers/selected-video-info/selected-video-info.reducer';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  styleUrls: ['./video-controls.component.css']
})
export class VideoControlsComponent{
  @Input() selectedVideoInfo: any;
  @Output() togglePlay: EventEmitter<void> = new EventEmitter<void>();
  @Output() seekNewTime: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('progressBar') el: ElementRef;

  constructor() {}

  calculateNewTime(e): void {
    let progressBar = this.el.nativeElement;
    let cuurentTime: number = this.selectedVideoInfo.currentTime;
    let duration: number = this.selectedVideoInfo.duration;
    let newTime = Math.floor(((e.clientX - 6) / progressBar.clientWidth) * this.selectedVideoInfo.duration);
    this.seekNewTime.emit(newTime);
  }

  get progress (): string {
    if(this.selectedVideoInfo.duration === 0) {
      return "0";
    }  else {
      return "" + this.selectedVideoInfo.currentTime / this.selectedVideoInfo.duration * 100
    }
  }
}
