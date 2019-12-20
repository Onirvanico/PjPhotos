import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
   }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
