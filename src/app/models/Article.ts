export class Article {
  public id?: string = null;
  public title?: string = null;
  public permalink?: string = null;
  public price?: number = null;
  public attributes?: { name: string; value_name: string }[] = [];
  public pictures?: { url: string; title: string }[] = [];
  public thumbnail?: string = null;
  public condition?: string = null;

  constructor(args?: Article) {
    Object.assign(this, args);
  }
}
