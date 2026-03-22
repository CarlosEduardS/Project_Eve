import { Component } from '@angular/core';
import { Info } from '../info/info';
import { HostListener } from '@angular/core';
import { Login } from '../login/login';
import { Menu } from "../menu/menu";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-header',
  imports: [Login, Menu, NgOptimizedImage],
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

  logoWidth = 30;
  logoHeight = 40;
  titleWidth = 200;
  titleHeight = 60;

  ngOnInit() {
    this.updateImageSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImageSize(event.target.innerWidth);
  }

  updateImageSize(screenWidth: number) {
    if (screenWidth >= 1600) {         // TV
      this.logoWidth = 90;
      this.titleWidth = 220;
      this.titleHeight = 90;
    } else if (screenWidth >= 1024) {  // PC
      this.logoWidth = 70;
      this.logoHeight = 65;
      this.titleWidth = 200;
      this.titleHeight = 70;
    } else if (screenWidth >= 768) {   // Tablet
      this.logoWidth = 70;
      this.logoHeight = 65;
      this.titleWidth = 200;
      this.titleHeight = 70;
    } else {                           // Celular
      this.logoWidth = 50;
      this.logoHeight = 45;
      this.titleWidth = 200;
      this.titleHeight = 50;
    }
  }
}
