import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = true;
  isAdmin: boolean = true;
  name: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.username.subscribe(username => {
      this.name = username;
    })
  }

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
}
