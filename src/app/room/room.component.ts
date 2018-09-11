import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { RoomOpenerService } from '../room-opener.service';
import { PlayerLocationService } from '../player-location.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit 
{
	roomSubscription: Subscription;

	characters: number[];

	imgPath: string;

	imgX: number;
	imgY: number;

	constructor(private roomServ: RoomOpenerService, private locationServ: PlayerLocationService) 
	{ 
		this.roomSubscription = roomServ.getObservable().subscribe(data => 
		{
			this.imgPath = data.room;
			this.characters = data.characters;

			this.imgX = window.pageXOffset + (window.innerWidth - window.innerHeight * 2 / 3) / 2;
			this.imgY = window.pageYOffset + window.innerHeight * 1 / 12;
		});
	}

	ngOnInit() {
	}

	onHallwayClick(event: MouseEvent)
	{
		this.roomServ.closeRoom();

		let x = event.clientX + window.pageXOffset;
		let y = event.clientY + window.pageYOffset;

		y = Math.min(y, window.innerHeight * 2 / 3);
		y = Math.max(y, window.innerHeight * 1 / 3);

		this.locationServ.sendLocation(x, y);
	}
}
