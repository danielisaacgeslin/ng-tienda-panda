import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  public saveMLIds(args: { token: string; MLIds: { [key: string]: string[] } }) {
    const headers = new HttpHeaders({ token: args.token });
    return this.http.post(env.api.mlIds, args.MLIds, { headers });
  }
}
