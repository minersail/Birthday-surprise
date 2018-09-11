import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations"
import { Subscription } from "rxjs";

import { PlayerLocationService } from "../player-location.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  // targetX, targetY are animation-only variables
  animations: [
    trigger('move', [
        state('move1', style({
            top: "{{ targetY }}",
            left: "{{ targetX }}"
        }), {params: {targetX: 0, targetY: 0}}),
        state('move2', style({ // Hacky - Two identical states need to be defined in order for animation to occur
            top: "{{ targetY }}",
            left: "{{ targetX }}"
        }), {params: {targetX: 0, targetY: 0}}),
        transition('move1 <=> move2', animate('200ms ease')),
    ]),
  ]
})
export class PlayerComponent implements OnInit 
{
	locSubscription: Subscription;

	state: string = "move1";

	x: number = 100;
	y: number = window.innerHeight / 2;
	height: number = window.innerHeight / 3;
	width: number = this.height / 2.8;

	constructor(private locationServ: PlayerLocationService) 
	{
		this.locSubscription = locationServ.getObservable().subscribe(location => 
		{
			this.x = location.x;
			this.y = location.y;
			this.state = (this.state == "move1" ? "move2" : "move1");
		});
	}

	ngOnInit() {
	}
}
