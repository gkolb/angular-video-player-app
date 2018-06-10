import { Injectable } from '@angular/core';
import { Video } from '../../models/video'
import { VIDEOS } from '../../mock-videos';

@Injectable()
export class VideoService {

  constructor() { }

  getVideos(): Video[] {
    return VIDEOS;
  }

}
