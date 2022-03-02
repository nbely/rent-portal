import { 
  Auth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoginData } from 'src/app/interfaces/login-data.interface';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  username = new BehaviorSubject<string>(null);

  login({ email, password }: LoginData) {
    console.log(this.auth);
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.username.next(email));
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth)
    .then(() => this.username.next(null));
  }
}