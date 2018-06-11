import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoService } from './services/video/video.service';
import { MinuteSecondsPipe } from './pipes/minuteSecond.pipe';
import { VideoPlayerService } from './services/video-player/video-player.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoListComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    VideoService,
    VideoPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
