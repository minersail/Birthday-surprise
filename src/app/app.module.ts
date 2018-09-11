import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HallwayComponent } from './hallway/hallway.component';
import { PlayerComponent } from './player/player.component';
import { DoorComponent } from './door/door.component';
import { PlayerLocationService } from './player-location.service';
import { RoomComponent } from './room/room.component';
import { RoomOpenerService } from './room-opener.service';
import { CharacterComponent } from './character/character.component';
import { CharacterService } from './character.service';


@NgModule({
  declarations: [
    AppComponent,
    HallwayComponent,
    PlayerComponent,
    DoorComponent,
    RoomComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    PlayerLocationService,
    RoomOpenerService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
