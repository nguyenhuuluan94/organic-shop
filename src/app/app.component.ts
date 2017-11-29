import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      // tslint:disable-next-line:curly
      if (!user) return;
      userService.save(user);

      const returnUrl = localStorage.getItem('returnUrl');
      // tslint:disable-next-line:curly
      if (!returnUrl) return;
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);

    });

  }
}
