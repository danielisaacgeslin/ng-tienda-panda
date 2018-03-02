export class Slide {
  public title: string = '';
  public src: string = '';

  constructor(args?: Slide) {
    Object.assign(this, args);
  }
}
