import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, ResponseOptions, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

@Injectable()
export class HttpHelperService {

  private reqCache: { [key: string]: any } = {};

  constructor(private http: Http) { }

  private mockRequest(cacheKey: string, body: any, url?: string, method?: string): any {
    const response: Response = new Response({
      status: 200,
      url,
      headers: new Headers(),
      body,
      merge: (options?: ResponseOptions) => options
    });
    return new Observable(observer => {
      if (!env.production) console.warn(`Reading from cache: ${method} - ${cacheKey}`, body);
      observer.next({ json: () => body });
      observer.complete();
    });
  }

  private getFromApiCache(cacheKey: string): Observable<Response> {
    return this.reqCache[cacheKey] || null;
  }

  private setIntoApiCache(cacheKey: string, request: Observable<Response>): Observable<Response> {
    request.take(1).do(data => this.reqCache[cacheKey] = data.json()).subscribe();
    return request;
  }

  /** wrapper arround http methods to run middleware (cache) */
  private wrapperMethod(config: { method: string; url: string; options: RequestOptionsArgs; body?: any }): Observable<Response> {
    const { method, url, options, body } = config;
    let request: Observable<Response> =
      (body ? this.http[method](url, body, options) : this.http[method](url, options)).share();
    const cacheKey: string = `${url}-${JSON.stringify(options)}`;
    const cacheResponse = method === 'get' && this.getFromApiCache(cacheKey);
    if (cacheResponse) request = this.mockRequest(cacheKey, cacheResponse, url, method);
    else request = this.setIntoApiCache(cacheKey, request);
    return request;
  }

  public getMLIds(): Observable<any> {
    const config = { method: 'get', url: env.api.mlIds, options: {} };
    return this.wrapperMethod(config).map(res => res.json());
  }

  public getItems(itemIds: string[]): Observable<any> {
    const options: RequestOptionsArgs = { params: { ids: itemIds.toString() } };
    const config = { method: 'get', url: env.api.mlItems, options };
    return this.wrapperMethod(config).map(res => res.json());
  }

}
