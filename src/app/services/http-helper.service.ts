import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

@Injectable()
export class HttpHelperService {

  private reqPool: { [key: string]: Observable<any> } = {};

  constructor(private http: Http) { }

  private shareRequest(method: string, url: string, options?: RequestOptionsArgs, body?: any) {
    const key: string = `${method}-${url}`; /** @todo add options and body to key if needed */
    this.reqPool[key] = this.reqPool[key] || this.http[method](url, options).share();
    return this.reqPool[key];
  }

  public getMLIds(): Observable<any> {
    return this.shareRequest('get', env.api.mlIds).map(res => res.json());
  }

  public getItems(itemIds: string[]): Observable<any> {
    const options: RequestOptionsArgs = { params: { ids: itemIds.toString() } };
    return this.shareRequest('get', env.api.mlItems, options).map(res => res.json());
  }

}
