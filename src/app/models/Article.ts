export class Article {
  public id?: string = null;
  public title?: string = null;
  public permalink?: string = null;
  public price?: number = null;
  public attributes?: { name: string; value_name: string }[] = [];
  public pictures?: { url: string; title: string }[] = [];
  public condition?: string = null;

  constructor(args?: any) {
    Object.assign(this, args);
  }
}
