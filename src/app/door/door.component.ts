import { Component, OnInit, Input } from '@angular/core';
import { PlayerLocationService } from '../player-location.service';
import { RoomOpenerService } from '../room-opener.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit 
{
	@Input() locX: number;
	@Input() locY: number;
	@Input() roomNum: number;

	unit: number = window.innerHeight / 6;

	constructor(private locationServ: PlayerLocationService, private roomServ: RoomOpenerService) { }

	ngOnInit() {
	}

	onClick(event: MouseEvent)
	{
		this.locationServ.sendLocation(this.locX * this.unit + this.unit / 2, this.locY * this.unit);
		this.roomServ.openRoom(this.roomNum);
	}
}
