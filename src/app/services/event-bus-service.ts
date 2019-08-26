import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private showMenuSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private addBookmarkSubject: Subject<any> = new Subject<any>();

  public get currentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  public notifyUserChanged(user: any) {
    this.currentUserSubject.next(user);
  }

  public get showMenu(): Observable<any> {
    return this.showMenuSubject.asObservable();
  }

  public notifyShowMenuChange(isShown: boolean) {
    this.showMenuSubject.next(isShown);
  }

  public get addBookmarkRequest(): Observable<any> {
    return this.addBookmarkSubject.asObservable();
  }

  public notifyAddbookmark(payload) {
    this.addBookmarkSubject.next(payload);
  }
}
