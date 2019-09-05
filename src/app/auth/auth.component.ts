import {Component, OnInit} from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isShown = true;

  constructor(private amplifyService: AmplifyService,
              private router: Router) {
  }

  ngOnInit() {
    this.isShown = true;
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === 'signedIn') {
        this.isShown = false;
        setTimeout(() => {
          this.router.navigate(['recording-list']);
          this.isShown = true;
        }, 500);
      }
    });
  }

}
