import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class PlayerLocationService 
{
	private moveData: Subject<any> = new Subject<any>();

 	constructor() { }

 	getObservable(): Observable<any>
 	{
 		return this.moveData.asObservable();
 	}

 	sendLocation(locX: number, locY:number)
 	{
 		this.moveData.next({x: locX, y: locY})
 	}
}
