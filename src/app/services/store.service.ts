import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class StoreService {

  private store: { [key: string]: Subject<any> } = {};

  constructor() { }

  public get(key: string): Observable<any> {
    return this.store[key] || Observable.empty();
  }

  public set(key: string, value: any): Observable<any> {
    if (!this.store[key]) this.store[key] = new Subject();
    this.store[key].next(value);
    return this.get(key);
  }

}
