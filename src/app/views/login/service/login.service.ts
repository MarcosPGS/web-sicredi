import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private TOKEN_USER = 'token-dragon';
  constructor() {}

  setUserLocalStorage(user: Login) {
    localStorage.setItem(this.TOKEN_USER, JSON.stringify(user));
  }
  login(user: Login): boolean {
    if (this._isConfirmedUser(user)) {
      
      this.setUserLocalStorage(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_USER);
  }
  isLogged(): boolean {
    return !!localStorage.getItem(this.TOKEN_USER);
  }
  _isConfirmedUser(user: Login): boolean {
    if (user.userName === 'dragon' && user.password === '12345') {
      return true;
    }
    return false;
  }
}
