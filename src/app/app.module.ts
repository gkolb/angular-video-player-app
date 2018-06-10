import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoService } from './services/video/video.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
