import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[]
  constructor() { }

  ngOnInit() {
  }

}
