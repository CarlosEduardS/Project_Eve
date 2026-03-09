import { Component } from '@angular/core';
import { Info } from '../info/info';
import { Login } from '../login/login';

@Component({
  selector: 'app-header',
  imports: [Login],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  UserName = 'Userklakshdk';
  isLoggedIn = false;
  isMenuOpen = false;
  RoteIcon = 'assets/rote-icon.png';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
