export class Article {
  public id?: string = null;
  public title?: string = null;
  public permaLink?: string = null;
  public attributes?: { name: string; value_name: string }[] = [];
  public pictures?: { url: string; title: string }[] = [];
  public condition?: string = null;

  constructor(args?: any) {
    Object.assign(this, args);
  }
}
