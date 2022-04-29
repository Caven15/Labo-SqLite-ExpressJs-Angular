import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../models/auth/loginForm.model';
import { RegisterForm } from '../models/auth/registerForm.model';
import { utilisateur } from '../models/utilisateur/utilisateur.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserSubject : BehaviorSubject<utilisateur>
  public currentUser : Observable<utilisateur>

  public get currentUserValue(): utilisateur {
    return this._currentUserSubject.value;
  }

  constructor(private _client: HttpClient, private _route: Router) { 
    //
    this._currentUserSubject = new BehaviorSubject<utilisateur>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  Register(user:RegisterForm) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/Auth/Register`, user);
  }

  Login(userLogin:LoginForm) : Observable<utilisateur>{
    return this._client.post<any>(`${environment.apiUrl}/Auth/Login`, userLogin)
    .pipe(map(user => {
    // Inserer l'utilisateur dans le sessionStorage
    const tokenDecode = JSON.parse(JSON.stringify(jwt_decode(user)));
    sessionStorage.setItem('id', JSON.stringify(tokenDecode.id));
    sessionStorage.setItem('nom', JSON.stringify(tokenDecode.nom));
    sessionStorage.setItem('prenom', JSON.stringify(tokenDecode.prenom));
    sessionStorage.setItem('isAdmin', JSON.stringify(tokenDecode.isAdmin));
    sessionStorage.setItem('dateNaissance', JSON.stringify(tokenDecode.dateNaissance));
    this._currentUserSubject.next(user);
    return user;
    }));
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
    this._route.navigate(['auth', 'login']);
  }

  isConnected() : boolean {
    return (this.currentUserValue != null);
  }
}
