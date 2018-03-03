export class Loading {
  public active: boolean = false;
  public status?: 'success' | 'danger' = null;
  public message?: string = null;
  public title?: string = null;

  constructor(args?: Loading) {
    Object.assign(this, args);
  }
}
