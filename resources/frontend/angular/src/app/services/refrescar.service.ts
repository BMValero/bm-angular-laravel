import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefrescarService {

  private _refresh$ = new Subject<void>();

  constructor() { }

  get refresh$(){
    return this._refresh$;
  }
}
