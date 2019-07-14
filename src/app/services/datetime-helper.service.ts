import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeHelperService {

  constructor() {
  }


  public format(dt: Date) {
    const result = [dt.getFullYear(),
        this.padZero(dt.getMonth() + 1),
        this.padZero(dt.getDate())].join('-') + ' ' +
      [this.padZero(dt.getHours()),
        this.padZero(dt.getMinutes()),
        this.padZero(dt.getSeconds())].join(':');

    return result;
  }

  private padZero(value) {
    return ('00' + value.toString()).slice(-2);
  }
}

