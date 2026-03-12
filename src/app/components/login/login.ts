import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

function numberCodificator(): number {
    const min = 100000000;
    const max = 1000000000;
    
    return Math.floor(Math.random() * (max - min) + min);
}


function codificator(keyProduct: number, token: string): string {
    const character = " ZAQWSXCDERFVBGTYHNMJUIKLOPÇzaqwsxcderfvbgtyhnmjuiklopç,.;~´[]'1234567890-=<>:^}{`+_(*&¨%$#@!)}¹²³£¢¬ºª§áéíóúãõàèìòù";

    const keyString = keyProduct.toString();
    const keyChars: number[] = [];
    
    for (const char of keyString) {
        if (/\d/.test(char)) {
            keyChars.push(parseInt(char, 10));
        }
    }

    const encodedChars = token.split('').map((char, i) => {
        const keyIndex = i % keyChars.length;
        const posicao = character.indexOf(char);
        
        const indexBusca = posicao === -1 ? 0 : posicao;

        const novoIndice = (indexBusca + keyChars[keyIndex]) % character.length;
        
        return character[novoIndice];
    });

    return encodedChars.join('') + keyChars.join('');
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
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
  Message = '';

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
    document.getElementsByClassName('message')[0].setAttribute('style', 'opacity: 0');
    if (!this.email || !this.password) {
      this.errorData = true;
      return;
    }
  }
  registrar(){
    document.getElementsByClassName('message')[0].setAttribute('style', 'opacity: 1');
    if (!this.username) {
      this.Message = 'Preencha o campo de nome';
      return;
    }
    for (let i = 0; i < 5; i++) {
      this.password = codificator(numberCodificator(), this.password)
    }

    const newUser = {
      password: this.password,
      username: this.username,
      email: this.email,
      id: 0
    }
    
    this.isLogin = false;
    
    this.http.post(this.urlUserUp, newUser, { responseType: 'text' })
      .subscribe((result) => {
        if (result === 'exist') {
          this.Message = 'Email já cadastrado';
        } else  {
          this.Message = 'Usuário criado com sucesso!';
        }
      });
  }
}
