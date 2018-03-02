import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

import { environment as env } from '../../environments/environment';
import { Article } from '../models';
import { HttpHelperService } from './http-helper.service';

@Injectable()
export class MLService {

  constructor(private httpHelperService: HttpHelperService) { }

  public getMLIds(): Observable<{ [key: string]: string[] }> {
    const config = { method: 'get', url: env.api.mlIds, options: {} };
    return this.httpHelperService.fetch(config).pipe(
      map(res => {
        const finalJson: any = {};
        for (const key in res) {
          if (key.charAt(0) === '_') continue;
          finalJson[key] = res[key];
        }
        return finalJson;
      })
    );
  }

  public getItem(id: string): Observable<Article> {
    return this.getItems([id]).pipe(
      map(items => items && items[0] || {})
    );
  }

  public getItems(ids: string[]): Observable<Article[]> {
    if (!ids.length) return empty();

    const options = { params: { ids: ids.toString() } };
    const config = { method: 'get', url: env.api.mlItems, options };
    return this.httpHelperService.fetch(config).pipe(
      map(res => (<any>res).sort((a, b) =>
        new Date(a.start_time).getTime() > new Date(b.start_time).getTime() ? 1 : -1
      ))
    );
  }
}
