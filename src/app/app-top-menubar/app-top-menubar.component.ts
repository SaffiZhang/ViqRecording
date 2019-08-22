import {Component, OnInit} from '@angular/core';
import Auth from '@aws-amplify/auth';
import {Router} from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {auth} from 'aws-amplify-angular/dist/src/assets/data-test-attributes';
import {EventBusService} from '../services/event-bus-service';

@Component({
  selector: 'app-app-top-menubar',
  templateUrl: './app-top-menubar.component.html',
  styleUrls: ['./app-top-menubar.component.scss']
})
export class AppTopMenubarComponent implements OnInit {

  public isAuthenticated = false;
  public user: any;
  public showMenu = true;

  constructor(private router: Router,
              private amplifyService: AmplifyService,
              private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.isAuthenticated = authState.state === 'signedIn';
      this.user = authState.user;
      this.eventBus.notifyUserChanged(this.user);
      console.log(this.user);
    });
    this.eventBus.showMenu.subscribe(r => {
      this.showMenu = r;
    });
  }

  public signOut($event) {
    $event.preventDefault();
    Auth.signOut().then(r => {
      console.log('sigout:', r);
      this.router.navigate(['/auth']);
    });
  }
}
