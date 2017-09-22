import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {

  private toastDuration: number = 3000;
  private toastCount: number = 0;
  private _toasts: IToast[] = [];
  get toasts() { return this._toasts; }

  constructor() { }

  public toast(toast: IToast, dontRemove?: boolean): IToast {
    toast.id = this.toastCount++;
    this._toasts.push(toast);
    if (!dontRemove) setTimeout(() => this.removeToast(toast.id), this.toastDuration);
    return toast;
  }

  public removeToast(id: number): boolean {
    let flag: boolean = false;
    this._toasts.forEach((toast, index) => {
      if (toast.id === id) {
        this._toasts.splice(index, 1);
        flag = true;
      }
    });
    return flag;
  }

}
