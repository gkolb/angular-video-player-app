import { Injectable } from '@angular/core';
import { Video } from '../../models/video'
import { VIDEOS } from '../../mock-videos';
import { Observable } from 'rxjs';

@Injectable()
export class VideoService {

  constructor() { }

  getVideos(): Observable<Video[]> {
    return Observable.of(VIDEOS);
  }

}
