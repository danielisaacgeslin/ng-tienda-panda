import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class StoreService {

  private store: { [key: string]: Subject<any> } = {};

  constructor() { }

  public get(key: string): Observable<any> {
    if (!this.store[key]) this.store[key] = new Subject();
    console.log(key, this.store[key])
    return this.store[key];
  }

  public set(key: string, value: any): Observable<any> {
    if (!this.store[key]) this.store[key] = new Subject();
    this.store[key].next(value);
    return this.get(key);
  }

}
