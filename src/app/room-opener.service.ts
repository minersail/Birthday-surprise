import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { ROOMS } from './room/room-list';


@Injectable()
export class RoomOpenerService 
{
	private roomData: Subject<any> = new Subject<any>();

 	constructor() { }

 	getObservable(): Observable<any>
 	{
 		return this.roomData.asObservable();
 	}

 	openRoom(roomNum: number)
 	{	
 		this.roomData.next(ROOMS[roomNum]);
 	}

 	closeRoom()
 	{
 		this.roomData.next({room: "", characters: []});
 	}
}
