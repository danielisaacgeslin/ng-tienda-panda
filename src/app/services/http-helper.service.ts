import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

@Injectable()
export class HttpHelperService {

  constructor(private http: Http) { }

  public getMLIds(): Observable<any> {
    return this.http.get(env.api.mlIds).map(res => res.json());
  }

  public getItems(itemIds: string[]): Observable<any> {
    const options: RequestOptionsArgs = { params: { ids: itemIds.toString() } };
    return this.http.get(env.api.mlItems, options).map(res => res.json());
  }

}
