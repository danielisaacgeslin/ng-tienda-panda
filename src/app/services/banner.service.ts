import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';
import { HttpHelperService } from './http-helper.service';

@Injectable()
export class BannerService {

  constructor(private httpHelperService: HttpHelperService) { }

  public getBanners(): Observable<string[]> {
    const method: string = 'get';
    const url: string = env.api.singleBanner;
    const options = {};
    return this.httpHelperService.fetch({ method, url, options }).pipe(
      map((res: string[]) => res.map(item => `${url}${item}`))
    );
  }
}
