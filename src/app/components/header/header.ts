import { Component } from '@angular/core';
import { Info } from '../info/info';
import { Login } from '../login/login';
import { Menu } from "../menu/menu";

@Component({
  selector: 'app-header',
  imports: [Login, Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  UserName = 'User';
  isLoggedIn = false;
  isMenuOpen = false;
  isAdmin = false;
  RoteIcon = 'assets/rote-icon.png';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
