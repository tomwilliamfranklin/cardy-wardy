import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  jwtToken: string;
  decodedToken: { [key: string]: string };

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = this.jwtHelper.decodeToken(this.jwtToken);
    }
  }

  getDecodeToken() {
    return this.jwtHelper.decodeToken(this.jwtToken);
  }

  getExpiryTime() {
    return this.jwtHelper.getTokenExpirationDate(this.jwtToken);
  }

  isTokenExpired(): boolean {
    if (this.jwtToken) {
      return this.jwtHelper.isTokenExpired(this.jwtToken);
    }

    return true;
  }

  isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }
}
