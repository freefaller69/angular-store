import { AppUser } from './../models/app-user';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(private auth: AuthService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.auth.logout();
  }
}
