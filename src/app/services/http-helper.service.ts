import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { share, tap, map, take } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';

@Injectable()
export class HttpHelperService {

  private reqCache: { [key: string]: any } = {};

  constructor(private http: HttpClient) { }

  /** wrapper arround http methods to run middleware (cache) */
  public fetch<T>(config: { method: string; url: string; options?: { body?: any, params?: any } }): Observable<T> {
    const { method, url, options } = config;
    let request: Observable<T> =
      (options && options.body ?
        this.http[method](url, options.body, options) :
        this.http[method](url, options)).pipe(share());
    const cacheKey: string = `${url}-${JSON.stringify(options)}`;
    const cacheResponse = method === 'get' && this.getFromApiCache(cacheKey);
    if (cacheResponse) request = this.mockRequest(cacheKey, cacheResponse, url, method);
    else request = this.setIntoApiCache(cacheKey, request);
    return request;
  }

  private mockRequest(cacheKey: string, body: any, url?: string, method?: string): any {
    return of(body).pipe(
      take(1),
      tap(() => {
        if (!env.production) console.warn(`Reading from cache`, { method, cacheKey, body });
      })
    );
  }

  private getFromApiCache(cacheKey: string): Observable<Response> {
    return this.reqCache[cacheKey] || null;
  }

  private setIntoApiCache(cacheKey: string, request: Observable<any>): Observable<any> {
    return request.pipe(
      take(1),
      tap(data => this.reqCache[cacheKey] = data)
    );
  }

}
