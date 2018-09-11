import { Injectable } from '@angular/core';

import { CHARACTER_IDS, MESSAGES, RATIOS } from "./character/character-list";

@Injectable()
export class CharacterService 
{
	constructor() { }

	getCharacterSprite(id: number): string
	{
		return CHARACTER_IDS[id];
	}

	getCharacterMessages(id: number): string[]
	{
		return MESSAGES[id];
	}

	getCharacterRatios(id: number): number[]
	{
		return RATIOS[id];
	}
}
