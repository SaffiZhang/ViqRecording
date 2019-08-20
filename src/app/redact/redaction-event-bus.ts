import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedactionEventBus {

  private historyChangeSubject: Subject<any> = new Subject<any>();

  public get redactionHistoryChanged(): Observable<any> {
    return this.historyChangeSubject.asObservable();
  }

  public notifyHistoryChanged() {
    this.historyChangeSubject.next({});
  }

}
