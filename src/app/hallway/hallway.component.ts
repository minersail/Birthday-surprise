import { Component, OnInit, ViewChild } from '@angular/core';

import { PlayerComponent } from "../player/player.component";
import { PlayerLocationService } from "../player-location.service";

@Component({
  selector: 'app-hallway',
  templateUrl: './hallway.component.html',
  styleUrls: ['./hallway.component.css']
})
export class HallwayComponent implements OnInit 
{
	@ViewChild(PlayerComponent) player: PlayerComponent;

	constructor(private locService: PlayerLocationService) {}

	ngOnInit() {
	}

	onClick(event: MouseEvent)
	{
		let x = event.clientX + window.pageXOffset;
		let y = event.clientY + window.pageYOffset;

		y = Math.min(y, window.innerHeight * 2 / 3);
		y = Math.max(y, window.innerHeight * 1 / 3);

		this.locService.sendLocation(x, y);
	}
}
