import { Injectable } from '@angular/core';

import { Article } from '../models';

@Injectable()
export class UtilsService {

  public readonly orderByCriterias: { name: string; value: string }[] = [
    { name: 'Fecha: de más nuevo a menos nuevo', value: 'latest' },
    { name: 'Fecha: de menos nuevo a más nuevo', value: 'oldest' },
    { name: 'Precio: de menos alto a más alto', value: 'minToMaxPrice' },
    { name: 'Precio: de más alto a menos alto', value: 'MaxToMinPrice' }
  ];

  constructor() { }

  public order(criteria: string, items: Article[] = []): Article[] {
    criteria = criteria || this.orderByCriterias[0].value;
    const orderingFns = {
      latest: (a, b) => new Date(a.start_time).getTime() < new Date(b.start_time).getTime() ? 1 : -1,
      oldest: (a, b) => new Date(a.start_time).getTime() > new Date(b.start_time).getTime() ? 1 : -1,
      minToMaxPrice: (a, b) => a.price > b.price ? 1 : -1,
      MaxToMinPrice: (a, b) => a.price < b.price ? 1 : -1
    };
    return items.sort(orderingFns[criteria]);
  }

}
