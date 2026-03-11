import { HttpClient } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  constructor(private http: HttpClient) {}
  urlUserUp = "http://localhost:5167/api/Users/SignUp"
  fecharL = output<boolean>();

  email = '';
  password = '';
  username = '';
  isLogin = true;
  errorData = false;
  errorEmail = false;

  fecharLogin() {
    this.fecharL.emit(true);
  }

  passLogin(){
    if (!this.email || !this.password){
      this.errorData = true;
      this.isLogin = true;
      return;
    } else {
      this.errorData = false;
      this.isLogin = false;
      return;
    }
  }

  logar(){
    if (!this.email || !this.password) {
      this.errorData = true;
      return;
    }

    // this.http.post(this.urlApi, newUser)
    //   .subscribe();
  }
  registrar(){
    if (!this.username) 
      return;

    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
      keyCode: random(10000000, 99999999),
      id: 0
    }
    
    this.isLogin = false;
    
    this.http.post(this.urlUserUp, newUser)
      .subscribe((resp) => {
        if (resp == 'exist') {
          alert('Email já cadastrado');
        }
      });
  }
}
