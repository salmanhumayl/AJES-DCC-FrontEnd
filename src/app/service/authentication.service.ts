import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  public isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

<<<<<<< HEAD
  storeTokenvalidity(token_validity: string) {
    localStorage.setItem("token_validity", token_validity);
  }

  token_validity

=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3
  getToken() {

     return localStorage.getItem("token"); // if empty return null
  }
  removeToken() {
     localStorage.removeItem("token");
  }

  StoreUserInfo(role: any) {

    localStorage.setItem('role', JSON.stringify(role));
  }

 
<<<<<<< HEAD
  

=======
>>>>>>> 7a8d15a93b1b0a01c67bde01f7d1d07a39449ca3

}