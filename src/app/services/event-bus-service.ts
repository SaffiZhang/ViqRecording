import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public get currentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  public notifyUserChanged(user: any) {
    this.currentUserSubject.next(user);
  }
}
