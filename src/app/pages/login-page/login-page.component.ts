import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(data: {email: string, password: string, isUser: boolean}) {
    var loginRegisterData = {
      email: data.email,
      password: data.password
    }
    if (data.isUser) {
      this.authService
        .login(loginRegisterData)
        .then(() => this.router.navigate(['/home']))
        .catch((e) => console.log(e.message));
    } else {
      this.authService
        .register(loginRegisterData)
        .then(() => this.router.navigate(['/tenant-home']))
        .catch((e) => console.log(e.message));
    }
  }
}