import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoService } from './services/video/video.service';
import { MinuteSecondsPipe } from './pipes/minuteSecond.pipe';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


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
    MatButtonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
