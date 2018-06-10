import { Component, OnInit, Input } from '@angular/core';
import * as Hls from 'hls.js';
import { Video } from '../models/video'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
