import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  public readonly orderByCriterias: { name: string; value: string }[] = [
    { name: 'Más Nuevo', value: 'latest' },
    { name: 'Más Antiguo', value: 'oldest' },
    { name: 'Menor a Mayor Precio', value: 'minToMaxPrice' },
    { name: 'Mayor a Menor Precio', value: 'MaxToMinPrice' }
  ];

  constructor() { }

  public order(criteria: string, items: IArticle[] = []): IArticle[] {
    criteria = criteria || this.orderByCriterias[0].value;
    const orderingFns = {
      latest: (a, b) => new Date(a.start_time).getTime() > new Date(b.start_time).getTime() ? 1 : -1,
      oldest: (a, b) => new Date(a.start_time).getTime() < new Date(b.start_time).getTime() ? 1 : -1,
      minToMaxPrice: (a, b) => a.price > b.price ? 1 : -1,
      MaxToMinPrice: (a, b) => a.price < b.price ? 1 : -1
    }
    return items.sort(orderingFns[criteria]);
  }

}
