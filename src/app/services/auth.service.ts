import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
const JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = process.env['AUTH_URL'];
  audience = process.env['AUDIENCE'];
  clientId = process.env['CLIENT_ID'];
  callbackURL = process.env['CALLBACK_URL'];

  token!: string;
  payload: any;

  constructor() {
    console.log(`auth url ${this.url}`);
  }

  build_login_link(callbackPath = '') {
    let link = 'https://';
    link += this.url + '.auth0.com';
    link += '/authorize?';
    link += 'audience=' + this.audience + '&';
    link += 'response_type=token&';
    link += 'client_id=' + this.clientId + '&';
    link += 'redirect_uri=' + this.callbackURL + callbackPath;
    return link;
  }

  // invoked in app.component on load
  check_token_fragment() {
    // parse the fragment
    const fragment = window.location.hash.substring(1).split('&')[0].split('=');
    // check if the fragment includes the access token
    if (fragment[0] === 'access_token') {
      // add the access token to the jwt
      this.token = fragment[1];
      // save jwts to localstore
      this.set_jwt();
    }
  }

  set_jwt() {
    localStorage.setItem(JWTS_LOCAL_KEY, this.token);
    if (this.token) {
      this.decodeJWT(this.token);
    }
  }

  load_jwts() {
    this.token = localStorage.getItem(JWTS_LOCAL_KEY) ?? '';
    if (this.token) {
      this.decodeJWT(this.token);
    }
  }

  activeJWT() {
    return this.token;
  }

  decodeJWT(token: string) {
    const jwtservice = new JwtHelperService();
    this.payload = jwtservice.decodeToken(token);
    return this.payload;
  }

  logout() {
    this.token = '';
    this.payload = null;
    this.set_jwt();
  }

  can(permission: string) {
    return (
      this.payload &&
      this.payload.permissions &&
      this.payload.permissions.length &&
      this.payload.permissions.indexOf(permission) >= 0
    );
  }
}
