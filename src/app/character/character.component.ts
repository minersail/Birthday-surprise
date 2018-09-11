import { Component, OnInit, Input } from '@angular/core';

import { CharacterService } from "../character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit 
{
	@Input() characterID: number;

	sprite: string;
	messages: string[];
	messageIndex: number = 0;

	height: number = window.innerHeight / 3;
	width: number = this.height / 2.8; // Default ratio; may be changed

	top: number = -1.5 * this.height;
	left: number = 3 * this.width;

	constructor(private characterServ: CharacterService) 
	{
	}

	ngOnInit() 
	{
		this.sprite = this.characterServ.getCharacterSprite(this.characterID);
		this.messages = this.characterServ.getCharacterMessages(this.characterID);
		this.height *= this.characterServ.getCharacterRatios(this.characterID)[0];
		this.width = this.height / this.characterServ.getCharacterRatios(this.characterID)[1];
	}

	nextMessage(event: Event)
	{
		this.messageIndex = this.messageIndex + 1 >= this.messages.length ? this.messageIndex : this.messageIndex + 1;

		event.stopPropagation();
	}
}
