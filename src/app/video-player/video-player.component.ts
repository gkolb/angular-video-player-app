import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Hls from 'hls.js';
import { Video } from '../models/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent {
  @Input() selectedVideo: Video;
  @Input() selectedVideoInfo: any;
  @Output() togglePlay: EventEmitter<any> = new EventEmitter<any>();
  @Output() seekNewTime: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
